# NSCC 360°
A virtual tour of the NSCC Institute of Technology Campus using virtual reality.
<h2>Please visit us! https://nscc-360.herokuapp.com/</h2>

<h2> Installation </h2>
After you clone the repository, make sure to run the commands below:
<br>
<code> 
  npm i
</code>
<br>
<code>
  docker-compose up
</code>

<h2> The Architecture </h2>
<p> The main application is divided into three different apps that communicate with each other. They are:</p>
<ul>
<li>A frontend that is build using NEXTJS and REACTJS. This application is responsible for displaying the information about the page, displaying the map of the campus, and any other data that appears in the frontend. This application is served through NEXTJS.</li>
<li>A framework that uses REACT 360 frameworks. This app is responsible for rendering the equirectangular photos of the campus. This application communicates with the home page frontend though an iframe. This application is served though a NGINX server.</li>
<li>A NGINX server that works as a router to the frontend and the REACT 360 application.</li>
<p>Each application is served through a docker container. The image below illustrates the flow of communication between the containers: 
