import React from 'react'
import vscode from '../images/vscode.jpg'
import htmllogo from '../images/htmllogo.jpg'
import javalogo from '../images/javalogo.jpg';
import phpmysqllogo from '../images/phpmysqllogo.jpg'
import reactlogo from '../images/reactlogo.jpg'
import nodejslogo from '../images/nodejslogo.jpg'

function SstFramework() {
  return (
    <div>
        <section className="bg-white dark:bg-gray-400">
          <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
            <div className="max-w-screen-md mb-8 lg:mb-16">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                Frameworks we use to design our website
              </h2>
            </div>
            <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
              <div>
                <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  <img src={vscode} alt='VSCode'/>
                </div>
                <h3 className="mb-2 text-xl font-bold dark:text-white">Microsoft Visual Code</h3>
                <p className="text-gray-500 dark:text-black">
                  VS Code supports almost every major programming language. Several ship in the box, like JavaScript, TypeScript, CSS, and HTML, but extensions for others can be found in the VS Code Marketplace.
                </p>
              </div>
              <div>
                <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  <img src={htmllogo} alt="HTML"/>
                </div>
                <h3 className="mb-2 text-xl font-bold dark:text-white">Html</h3>
                <p className="text-gray-500 dark:text-black">
                  HTML stands for Hyper Text Markup Language. HTML is the standard markup language for creating Web pages. HTML describes the structure of a Web page. HTML consists of a series of elements.
                </p>
              </div>
              <div>
                <div className="flex justify-center items-center mb-4 w-10 h-11 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  <img src={javalogo} style={{ height: "50px", width: "70px" }} alt='Java'/>
                </div>
                <h3 className="mb-2 text-xl font-bold dark:text-white">Java</h3>
                <p className="text-gray-500 dark:text-black">
                  Java SE lets you develop and deploy Java applications on desktops and servers. Java SE and component technologies offer the rich user interface, performance, versatility, portability, and security that today's applications require.
                </p>
              </div>
              <div>
                <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  <img src={reactlogo} alt='React'/>
                </div>
                <h3 className="mb-2 text-xl font-bold dark:text-white">React</h3>
                <p className="text-gray-500 dark:text-black">
                  React, sometimes referred to as a frontend JavaScript framework, is a JavaScript library created by Facebook. React is a tool for building UI components. React finds out what changes have been made, and changes only what needs to be changed.
                </p>
              </div>
              <div>
                <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  <img src={phpmysqllogo} alt='PhpMySql'/>
                </div>
                <h3 className="mb-2 text-xl font-bold dark:text-white">PhpMySql</h3>
                <p className="text-gray-500 dark:text-black">
                  With PHP, you can connect to and manipulate databases. MySQL is the most popular database system used with PHP. MySQL is a database system used on the web. MySQL is a database system that runs on a server.
                </p>
              </div>
              <div>
                <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  <img src={nodejslogo} alt='Nodejs'/>
                </div>
                <h3 className="mb-2 text-xl font-bold dark:text-white">Nodejs</h3>
                <p className="text-gray-500 dark:text-black">
                  Node.js is an open-source and cross-platform JavaScript runtime environment. It is a popular tool for almost any kind of project! Node.js runs the V8 JavaScript engine, the core of Google Chrome, outside of the browser. This allows Node.js to be very performant.
                </p>
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}

export default SstFramework;
