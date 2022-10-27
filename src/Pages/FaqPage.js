import React from 'react';

const FaqPage = () => {
    return (
        <div className='md:w-1/2 lg:w-1/2 mx-auto  md:my-20 p-8 drop-shadow-lg rounded-xl bg-fuchsia-50'>
        <div tabIndex={0} className="collapse mb-5 collapse-arrow border border-base-300 bg-base-100 rounded-box">
            <div className="collapse-title text-xl font-medium">
            What is cors?
            </div>
            <div className="collapse-content"> 
                <p>Cross-origin resource sharing (CORS) is a browser mechanism which enables controlled access to resources located outside of a given domain. It extends and adds flexibility to the same-origin policy (SOP). However, it also provides potential for cross-domain attacks, if a website's CORS policy is poorly configured and implemented. CORS is not a protection against cross-origin attacks such as cross-site request forgery (CSRF).</p>
            </div>
        </div>

        <div tabIndex={0} className="collapse mb-5 collapse-arrow border border-base-300 bg-base-100 rounded-box">
            <div className="collapse-title text-xl font-medium">
            Why are you using firebase? 
            </div>
            <div className="collapse-content"> 
                <p>Firebase concept is simple. When you build a client-side app with JavaScript or any of its frameworks, for instance, Google Firebase can turn this into a serverless app in no time. It also removes the need to manage databases yourself, as it does that for you.</p>
            </div>
        </div>


        <div tabIndex={0} className="collapse mb-5 collapse-arrow border border-base-300 bg-base-100 rounded-box">
            <div className="collapse-title text-xl font-medium">
            When will I have access to the lectures and assignments?
            </div>
            <div className="collapse-content"> 
                <p>Access to lectures and assignments depends on your type of enrollment. If you take a course in audit mode, you will be able to see most course materials for free. To access graded assignments and to earn a Certificate, you will need to purchase the Certificate experience, during or after your audit. If you don't see the audit option: 

                    The course may not offer an audit option. You can try a Free Trial instead, or apply for Financial Aid.

                    The course may offer 'Full Course, No Certificate' instead. This option lets you see all course materials, submit required assessments, and get a final grade. This also means that you will not be able to purchase a Certificate experience.</p>
                </div>
        </div>


        <div tabIndex={0} className="collapse mb-5 collapse-arrow border border-base-300 bg-base-100 rounded-box">
            <div className="collapse-title text-xl font-medium">
            What will I get if I purchase the Certificate?
            </div>
            <div className="collapse-content"> 
                <p>When you purchase a Certificate you get access to all course materials, including graded assignments. Upon completing the course, your electronic Certificate will be added to your Accomplishments page - from there, you can print your Certificate or add it to your LinkedIn profile.  If you only want to read and view the course content, you can audit the course for free.</p>
            </div>
        </div>

        <div tabIndex={0} className="collapse mb-5 collapse-arrow border border-base-300 bg-base-100 rounded-box">
            <div className="collapse-title text-xl font-medium">
            Is financial aid available?
            </div>
            <div className="collapse-content"> 
                <p>Yes. In select learning programs, you can apply for financial aid or a scholarship if you can’t afford the enrollment fee. If fin aid or scholarship is available for your learning program selection, you’ll find a link to apply on the description page.</p>
            </div>
        </div>
                


    </div>
    );
};

export default FaqPage;