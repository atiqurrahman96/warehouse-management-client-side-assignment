import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div>
                <h1>What is difference between javascript and nodejs?</h1>
                <p>*
                    Javascript is a programming language that is used for writing scripts on the website.But NodeJS is a Javascript runtime environment. *It is basically used on the client-side. On the contrary, It is mostly used on the server-side.
                    *Javascript is capable enough to add HTML and play with the DOM.
                    Whereas,Nodejs does not have capability to add HTML tags. </p>
            </div>
            <div>
                <h1>When should we use NodeJs and Mongodb also?</h1>
                <p>Any project needs a programming environment and a runtime library that offers you basic programming tools/support and can compile and/or interpret your code. Nodejs is such as tool for the Javascript programming language. There are other similar tools for other languages such as Python, Java, PHP, C#, C++, Go, etc..On the other hand , If your application needs the ability to persistently store data in a way that you can efficiently query or update it later, then you would typically use some form of database. There are dozens of popular databases. MongoDB is one such database. MariaDB, MySql, CouchDB, DynamoDB (on AWS), Postgres are examples of other databases.</p>
            </div>
            <div>
                <h1>What is the difference between SQL and Nosql database?</h1>
                <p>
                    SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.
                </p>

            </div>
            <div>
                <h1></h1>
                <p>JWT or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.</p>
                <p> It works by this way,
                    #A user logs in to an application with a username and password, or otherwise proves her identity.#The server confirms her identity and sends back an access token containing a reference to her identity (e.g. a private key pointing to a unique User instance).#The client then includes this access token with every request to the server.
                </p>
            </div>
        </div>
    );
};

export default Blogs;