import Image from "next/image";
import Link from "next/link";
import styles from "../styles/practicum.module.css";
import Nav from "../components/nav";
import TOC from "./components/tableofcontents";

const imageStyle = {
  width:'100%',
  height:'100%',
  objectFit:'contain'
}

export default function Practicum() {
    return (
      <main className={`${styles.main}`}>
      <Nav/>
      <section id="practicum" className={`d-flex flex-lg-row flex-column`}>
            <TOC/>
            <div className={`${styles["practicum-main"]} overflow-auto`}>
              <div className={`d-flex flex-column align-items-center text-center`}>
                <h1>Practicum Experience</h1>
                <p className={`mb-0`}>Prosperna</p>
                <p>April 29, 2024 - July 1, 2024</p>
                <div className={`text-center`}><Link href="/files/MAALA_PRACTICUM_REPORT.pdf" target="blank"><button className={`btn`}>View Full Report</button></Link></div>
              </div>


              <div id="introduction" className={`mt-4 d-flex flex-column align-items-center`}>
                <h2>Introduction</h2>
                <div className={`${styles["img-container"]}`}>
                  <img
                      src="/images/prosperna.png"
                      width={0}
                      height={0}
                      style={imageStyle}
                      loading="lazy"
                  />
                </div>
                <p className={`mt-4`}>Prosperna is a company located in Alabang, Muntinlupa that provides an eCommerce
                platform for local Micro, Small and Medium sized Enterprises (MSMEs). During my internship
                in Prosperna, I am assigned as the front-end developer under the Engineering team. The expected
                tasks for me as a front-end development intern are to follow the Business Requirements
                Document (BRD), develop a quality module with few Quality Assurance (QA) returns, have end
                to end testing with QA frequently, and have communication with other teammates. Specifically, I
                am assigned to handle the p1 application or the web platform for Prosperna merchants, conduct
                website building for potential clients using the Prosperna p1 Page Builder, conduct front-end
                support tasks such as text changes and User Interface (UI) enhancement, and conduct product
                development, particularly Product Image Labels. Throughout the entire practicum, I am expected
                to identify, analyze, and design business processes of the organization and apply the different
                concepts of system analysis and design, software engineering, database management, and
                programming courses to the organization and acquire new knowledge and real world experience.</p>
              </div>

              <div id="outputs" className={`mt-4 d-flex flex-column align-items-center`}>
                <h2>Outputs</h2>
                <p className={`mt-4`}>
                  As a front-end development intern, most of my tasks involve fixing bugs and issues in the merchant platform's user interface. These fixes mainly include text changes, spelling and terminology corrections, and display issues.
                </p>

                <p className={`mt-4`}>
                  I also had the opportunity to take part in Feature Development. During our latest sprint, I am assigned to do a new feature for the Prosperna Merchant Platform, Product Image Labels.
                  Despite being already familiar with the merchant platform repository, I am still new when it comes to setting up new pages, modules, and components for a new feature.
                  Since the appearance and setup is similar to an existing module (Product Categories), the senior devs instructed me to reuse the code used for that module to setup the view for the product labels.
                </p>

                <p className={`mt-4`}>
                  During this task, I also work closely with a backend developer assigned to setup the APIs for retrieving
                  relevant data for the labels, as well as conducting the CRUD method. I also collaborated with a Business Analyst (BA) and a UX/UI Designer who provided
                  the BRD and High-fidelity wireframe respectively for clarifications and other concerns.
                </p>

                <div>
                <p className={`mt-4`}>
                I implemented each requirement per use case to ensure the flow makes sense.</p>
                <ul>
                  <li><span className={`fw-bold`}>USE CASE 1 | Create Standard Product Labels:</span> Set up the main view for all product labels. Validation for free and paid users is
                  also implemented, where paid users are only allowed to add new labels while free users will be prompted to upgrade once they click the "Add Product Label" button.
                  </li>
                  <li><span className={`fw-bold`}>USE CASE 2 | Create a New (Custom) Product Label:</span> Implemented form functionalities for custom label creation, real time editing, and custom label saving.
                  The new custom label will be seen on the main view after saving.
                  </li>
                  <li><span className={`fw-bold`}>USE CASE 3 | View a Product Label:</span> Implemented product label view layout with its corresponding details matching the preview appearance. Also included the list of relevant information such as
                  name, text, hover text, duration, and dates of creation and update next to the preview. Validation is also implemented in this module, where default labels (Best Seller, Sale, New) cannot be edited, while custom labels can be edited.
                  </li>
                  <li><span className={`fw-bold`}>USE CASE 4 | Edit a Product Label
                  :</span> Implemented form autofill containing saved details about a label and real time editing. 
                  </li>
                  <li><span className={`fw-bold`}>USE CASE 5 | Delete a Product Label:</span> Implemented functionality for label deletion. Implemented validation for free and paid users. Default labels (Best Seller, Sale, New) cannot be deleted, while custom labels can be
deleted. Changes reflected both in main view and p1 Customer site.

                  </li>
                  <li><span className={`fw-bold`}>USE CASE 6 | Assign a Product Label to a Product:</span> Implemented multiple label selection during product editing. Changes reflected in p1 Customer site.

                  </li>
                  <li><span className={`fw-bold`}>USE CASE 7 | Remove a Product Label from a Product:</span> Implemented label removal during product editing. Changes reflected in p1 Customer site.


                  </li>
                </ul>
                </div>

                <p> While the main functionality has been implemented, other supplementary requirements
such as UI and responsiveness concerns have not been resolved on the intended end date. The team planned to let me continue working on the enhancements on the following days
after my end date (July 1, 2024) since this is planned to be released on the main platform
by July 5, 2024.</p>
<p> While I did not reach the intended deadline for main release, I still ensured that the task
will not take longer than expected. As of July 8, 2024, I finally resolved my issues and
published my work on the dev server for QA testing. The QA testing for staging and
main release was conducted on July 9, 2024. It was also published on the main platform
within the same day, making the task 100% complete.</p>
                
                
                {/*<div>
                  <h3>Custom Delivery Date Add-On Text Changes</h3>
                  <p><span className={`fw-bold`}>Nature Of Task:</span> Support</p>
                  <p className={`fw-bold`}>Expectations</p>
                  <ul>
                    <li>Conduct the following text changes
                      <ul>
                        <li>"Customer" ➝ "Custom"</li>
                        <li>"Setup Name" ➝ "Custom Delivery Name"</li>
                        <li>"Name" ➝ "Custom Delivery Name"</li>
                        <li>"Custom Setup for Products" ➝ "Product Availability"</li>
                        <li>"Enter Product Tags" ➝ "Product Tags"</li>
                        <li>"Select Custom Date" ➝ "Delivery Date Type"</li>
                        <li> "Select Delivery Days" ➝ "Delivery Dates"</li>
                        <li>"Cut-off Time" ➝ "Cut-Off Times"</li>
                        <li>"Preparation Days/Times" ➝ "Preparation Time"</li>
                        <li>"Set Availability of Products" ➝ "By Delivery Dates"</li>
                        <li>”Set Custom Cutoff and Release of Orders" ➝ "By Delivery Dates, Cut-off and
                        Preparation Time"</li>
                        <li>"Per Day" ➝ "Select a specific day and time slot"</li>
                        <li>"Date Range" ➝ "Select by date range"</li>
                        <li>"Work Starts at:" ➝ "Take Orders by:"</li>
                        <li>"Work ends at: " ➝ "Last Orders by:"</li>
                      </ul>
                    </li>
                    <li>Add tooltips with notes besides Product Availability choices</li>
                  </ul>
                  <p className={`fw-bold`}>Notes</p>
                  <ul>
                    <li>Since this task contains multiple text changes and an additional element, I thoroughly studied each part that needs to be modified.</li>
                    <li>I initially had difficulty with adding a tooltip beside a radio button option (the process is
different from what is usually done for simple texts and headings), so I consulted with a
senior dev about possible setups.</li>
                  </ul>
                </div>*/}
                
                
              </div>

              <div id="synthesis" className={`mt-4 d-flex flex-column align-items-center`}>
                <h2>Synthesis</h2>
                <p className={`mt-4`}>Even though I have worked in numerous systems for laboratory activities and thesis, the
                  responsibility for working on an actual software product greatly differs to me. Considering that
                  there are actual people currently using the Prosperna platform for their business, I feel like I have
                  to be more vigilant and accountable while working on support tasks and feature development,
                  since one small mistake can affect how a client perceives our product.</p>
                  <p className={`mt-4`}>Despite having a mixed setting of remote and onsite, Prosperna promotes constant
                  communication across all teams. Since every task is connected from Customer Relations to
                  Engineering, daily and weekly alignment meetings such as Daily Stand Ups and Show and Tells
                  every Friday are conducted every week for all teammates to be aware about each other’s current
                  progress and how it can impact their plans for the entire month and year. I also had the
                  opportunities to showcase my progress with my fellow bootcamp members and express my ideas
                  and concerns during meetings. This allows me to either have more insights about the depths of
                  the Prosperna development process or introduce a new concept or solution to the idea for
                  consideration and improvement.</p>
                  <p className={`mt-4`}>All of my accomplishments in Prosperna is possible thanks to the guidance of my fellow
                  bootcamp members and seniors from the Engineering, Customer Relations, Business Analyst,
                  and Quality Assurance team. From teaching me the process of conducting Pull Requests and
                  Release Notes in Github to introducing me to external tools for a more effective programming
                  process, they allowed me to improve my skills as a developer.</p>
                  <p className={`mt-4`}> With the experience that I have gathered in Prosperna, I greatly improved not only my
                  technical skills in coding, UX/UI design, and project management, but also my soft skills,
                  including creativity, accountability, transparency, and eagerness to challenge myself everyday.</p>
                  
                 
              </div>

              <div id="appendices" className={`mt-4 d-flex flex-column align-items-center`}>
                <h2>Appendices</h2>
                <ol>
                  <li>
                    <Link className={`mt-2 text-reset`} href="/files/MAALA_PRACTICUM_REPORT.pdf" target="blank">
                      Full Practicum Report
                    </Link>
                  </li>
                  <li>
                    <Link className={`mt-2 text-reset`} href="/files/ANDREA_MEI_MAALA_CV.pdf" target="blank">
                      Competency-Based CV
                    </Link>
                  </li>
                  <li>
                    <Link className={`mt-2 text-reset`} href="/files/MAALA_PRACTICUM_REPORT.pdf" target="blank">
                      Practicum Intent Form
                    </Link>
                  </li>
                  <li>
                    <Link className={`mt-2 text-reset`} href="/files/ANDREA MAALA-Form OVPAA-030B-Practicum Confirmation.pdf" target="blank">
                      Practicum Confirmation and Acceptance Form
                    </Link>
                  </li>
                  <li>
                    <Link className={`mt-2 text-reset`} href="/files/ANDREA MAALA-Form OVPAA-030C-Liability Waiver.pdf" target="blank">
                      Student Training Agreement and Liability Waiver
                    </Link>
                  </li>
                  <li>
                    <Link className={`mt-2 text-reset`} href="/files/ANDREA MAALA-Form OVPAA-030D-Training Plan.pdf" target="blank">
                      Training Plan
                    </Link>
                  </li>
                  <li>
                    <Link className={`mt-2 text-reset`} href="/files/ANDREA_MEI_MAALA_CERTIFICATE_OF_COMPLETION.pdf" target="blank">
                      Certificate of Completion
                    </Link>
                  </li>
                </ol>
                

                  
              </div>

              
            </div>
      </section>
    </main>
    )
}