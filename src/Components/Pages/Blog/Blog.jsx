import React from "react";

const Blog = () => {
  return (
    <div className="flex flex-col w-3/4 mx-auto border-opacity-50 my-12">
      <div className="grid card bg-base-300 rounded-box place-items-start p-3">
        <h1 className="text-red-500">
          What is an access token and refresh token? How do they work and where
          should we store them on the client-side?
        </h1>
        <p>
          An access token is a short-lived credential that represents a user's
          authorization to access protected resources. It is issued after
          successful authentication and is included in requests to the server to
          grant access. <br />
          A refresh token is a long-lived token that is used to obtain a new
          access token when the current one expires. It allows the user to
          maintain their authenticated state without reauthentication. <br />
          On the client-side, access tokens are typically stored securely in
          browser cookies or local storage, while refresh tokens are preferably
          stored in server-side sessions or secure HTTP-only cookies.
        </p>
      </div>
      <div className="divider"></div>
      <div className="grid card bg-base-300 rounded-box place-items-start p-3">
        <h1 className="text-red-500">Compare SQL and NoSQL databases?</h1>
        <p>
          SQL databases are structured and use predefined schemas. They use SQL
          for querying, provide strong data consistency, and are good for
          applications with complex relationships. <br />
          NoSQL databases are flexible and schema-less. They have different
          query languages, prioritize scalability over strong consistency, and
          are suitable for unstructured data and high scalability needs.
        </p>
      </div>
      <div className="divider"></div>
      <div className="grid card bg-base-300 rounded-box place-items-start p-3">
        <h1 className="text-red-500">What is express js? What is Nest JS?</h1>
        <p>
          Express.js is a minimal and flexible web application framework for
          Node.js. It provides a simple and straightforward way to build web
          applications and APIs, handling routing, middleware, and HTTP requests
          and responses. <br />
          NestJS is a progressive Node.js framework for building efficient,
          scalable, and maintainable server-side applications. It is built with
          TypeScript and incorporates object-oriented programming principles,
          dependency injection, and modular architecture to enhance developer
          productivity and application organization. NestJS is designed to be
          extensible and integrates well with other libraries and frameworks.
        </p>
      </div>
      <div className="divider"></div>
      <div className="grid card bg-base-300 rounded-box place-items-start p-3">
        <h1 className="text-red-500">What is MongoDB aggregate and how does it work?</h1>
        <p>
        MongoDB's aggregate is a feature that allows you to perform advanced data processing and analysis operations on MongoDB collections. It uses a pipeline of stages to sequentially process documents, performing operations like filtering, grouping, sorting, and more. It helps you achieve complex data processing tasks and extract insights from your MongoDB data.
        </p>
      </div>
    </div>
  );
};

export default Blog;
