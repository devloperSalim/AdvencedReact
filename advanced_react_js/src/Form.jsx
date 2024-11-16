import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import './App.css';

export default function Form() {
  const { register, handleSubmit, control } = useForm({
    defaultValues: async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users/3')
      const user = await response.json()
      return {
          fullName: user.name,
          email: user.email,
          age: 30,
          password: '123456'
      }
  }
  });

  const FormSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="text-center">
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
              minLength: 5,
            })}
          />
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
        </div>

        <div className="form-group">
          <label>Password</label>
          <input className="form-control" type="password" {...register('password')} />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input className="form-control" type="email" {...register('email',{
            pattern:/^\S+@\S+\.\S+$/
          })} />
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
          <input className="btn btn-primary" type="submit" value="Submit" />
        </div>
      </form>

      {/* DevTool for debugging */}
      <DevTool control={control} />
    </div>
  );
}
