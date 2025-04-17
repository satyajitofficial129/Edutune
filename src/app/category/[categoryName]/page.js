import React from 'react'

const page = async ({ params }) => {
    const { categoryName } = params;

    try {
      return (
        <div>
          <h1>{categoryName}</h1>
        </div>
      );
    } catch (error) {
      return (
        <div>
          <h1>Category not found</h1>
        </div>
    );
    }  
}

export default page