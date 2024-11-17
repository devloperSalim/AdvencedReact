import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools' ;
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup'
import './App.css';

const schema = yup.object({
  fullName: yup
  .string()
  .required('Full name is required')
  .min(4, 'Full name must be at least 4 characters long')
  .max(50, 'Full name cannot exceed 50 characters'), // Optional max length
  age : yup.number().required(),
  password: yup.string().test('value', 'Invalid password', value => {
    return value === '123456'
}),
email: yup.string().required().email()
})

export default function Form() {
  const { control , register, handleSubmit , formState } = useForm({
    mode:'onBlur',
    resolver:yupResolver(schema),
    defaultValues: async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users/1')
      const user = await response.json()
      return {
          fullName: user.name,
          email: user.email,
          age: 30,
          password: '123456'

   
      }
  }
  });

  const {errors , isValid , dirtyFields , isLoading , submitCount , isSubmitSuccessful} = formState

  const FormSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="text-center">

      {submitCount>3 ?
        <div className='alert alert-danger'>
        <strong>You are blocked , please contact the administrator !!! </strong>
        </div>
       :
       <>
        
    {isLoading && <div>Loading...</div>}

    {isSubmitSuccessful && <div className='alert alert-primary' role='alert'>
        <strong>success</strong>
        form submitted
    </div>
    }
      <h2 className="display-6 text-primary">Update User</h2>
      <hr className="text-primary" />
      <form onSubmit={handleSubmit(FormSubmit)} className="">
        <div className="form-group">
          <label>Full Name</label>
          <input
            className="form-control"
            type="text"
            {...register('fullName', {
              required: true,
              minLength: {
                value:5,
                message:'to any caracers'
              }
            })}
          />
            {errors.fullName && <span className='text-danger'>{errors.fullName.message}</span>}
        </div>

        <div className="form-group">
          <label>Age</label>
          <input
            className="form-control"
            type="text"
            {...register('age', {
              min: 18,
              max: 80,
            })}
          />
             {errors.age && <span className='text-danger'>{errors.age.message}</span>}
        </div>

        <div className="form-group">
          <label>Password</label>
          <input className="form-control" type="password" {...register('password')} />
          {errors.password && <span className='text-danger'>{errors.password.message}</span>}
        </div>

        <div className="form-group">
          <label>Email</label>
          <input className="form-control" type="email" {...register('email',{
            pattern:/^\S+@\S+\.\S+$/
          })} />
           {errors.email && <span className='text-danger'>{errors.email.message}</span>}
        </div>

        <div className="form-group">
          <label>Country</label>
          <select className="form-select" {...register('country')}>
            <option value="">Select your country</option>
            <option value="MA">Morocco</option>
            <option value="DZ">Algeria</option>
            <option value="TN">Tunisia</option>
          </select>
 
        </div>

        <div className="my-3">
          <input className="btn btn-primary" type="submit" value="Submit" disabled={!isValid || Object.keys(dirtyFields).length === 0} />
        </div>
            {/* DevTool for debugging */}
      <DevTool control={control} />
      </form>

  
       </> 
      }

    </div>
  );
}
