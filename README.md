Ext Js 5 Evaluation Sample Application + Karma + Jasmine
=========================================================
This application showcases few of interesting new features of Ext Js 5.<br>

Pre-Requisites:
================
<ol>
<li>Ext Js 5 SDK</li>
<li>Sencha Cmd 5.x(latest stable one)</li>
<li>Node Js</li>
<li>Karma</li>
<li>Jasmine</li>
<li>Phantom Js</li>
<li>Karma-Chrome-Launcher(optional)</li>
</ol>

Install Node Js and make npm available to command prompt/terminal<br>

Download and install Sencha CMD latest and stable version along with latest version of Ext Js<br>
Install Node Js<br>

Once all the dependencies are met, proceed with the application creation<br>
One may use the below commands in terminal for application creation<br>
<ol>
<li>sencha generate workspace TestWs</li>
<li>sencha generate app -ext App TestApp </li>
</ol>

Above commands will generate the application skeleton in a workspace "TestWs".<br>
Move to TestApp folder and execute the below commands to make the npm modules available to the application.
<ol>
<li>npm install karma --save-dev</li>
<li>npm install karma-cli --save-dev</li>
<li>npm install phantomjs --save-dev</li>
<li>npm install karma-jasmine@2_0 --save-dev</li>
<li>npm install karma-coverage --save-dev</li>
<li>npm install karma-html-reporter --save-dev</li>
<li>npm install karma-phantomjs-launcher --save-dev</li>
<li>npm install karma-chrome-launcher (for chrome)</li>
</ol>

The sample application contains few of the interesting features of Ext Js 5. They are,
<ol>
<li>MVVM architecture </li>
<li>Data Binding</li>
<li>Model vaildation of form fields</li>
<li>Responsive config to a view </li>
<li>Deep Linking/ Routing </li>
<li>New Sencha-Charts module</li>
<li>Custom Field type for a model</li>
<li>ViewModel and ViewController definitions </li>
<li>Ext.toast() </li>
<li>Breadcrumb widget </li>
<li> and some others as well </li>
</ol>

Sample unit test cases are written using Jasmine 2.0. <br>
Unit test cases are written for models, controllers and views.<br>
Unit test cases can be found inside "test-specs" inside the TestApp application.<br>
Unit test cases covers testing for View, ViewModel and ViewController.<br>

