const Form = () => {
    return (
        <div class="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg">
    <h2 class="text-3xl font-semibold text-blue-600 mb-4">Update User</h2>
    <hr class="border-t-2 border-blue-600 mb-4" />
    <form>
  
        <div class="mb-4">
            <label for="fullName" class="block text-gray-700 font-medium mb-2">Full name</label>
            <input
                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text" id="fullName" />
            <span class="text-red-500 text-sm">Error message here</span> 
        </div>

        <div class="mb-4">
            <label for="age" class="block text-gray-700 font-medium mb-2">Age</label>
            <input
                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text" id="age" />
            <span class="text-red-500 text-sm">Error message here</span>
        </div>

    
        <div class="mb-4">
            <label for="password" class="block text-gray-700 font-medium mb-2">Password</label>
            <input
                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="password" id="password" />
            <span class="text-red-500 text-sm">Error message here</span>
        </div>


        <div class="mb-4">
            <label for="email" class="block text-gray-700 font-medium mb-2">Email</label>
            <input
                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="email" id="email" />
            <span class="text-red-500 text-sm">Error message here</span>
        </div>

        <div class="mb-4">
            <label for="country" class="block text-gray-700 font-medium mb-2">Country</label>
            <select
                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                id="country">
                <option value="">Select your country</option>
                <option value="MA">Morocco</option>
                <option value="DZ">Algeria</option>
                <option value="TN">Tunisia</option>
            </select>
        </div>

        <div class="my-4">
            <input
                class="w-full px-4 py-2 bg-blue-500 text-white rounded-md cursor-pointer disabled:bg-gray-300"
                type="submit" value="Submit" />
        </div>
    </form>
</div>

    );
}

export default Form;