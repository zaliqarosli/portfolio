import Image from 'next/image';

export default function Page() {
  const title = 'patient dashboard';
  const name = 'patient-dashboard';
  return (
    <>
      <header className='flex flex-col items-center self-stretch relative'>
        <div className='flex min-h-[43.75rem] justify-center items-start gap-[0.625rem] self-stretch relative'>
          <div className='flex min-h-[31.25rem] pt-[1.25rem] justify-center items-start bg-white w-full'>
            <Image
              src='/data-entry-graphic@2x.jpg'
              width={4096}
              height={2391}
              // fill={true}
              alt={`graphic depicting research data collection`}
              style={{ objectFit: 'contain', width: '100%' }}
              className='max-w-[68.75rem] max-h-[41.7rem] flex-[1_0_0] aspect-[512.00/310.50]'
            />
          </div>
        </div>
        <div className='flex py-[0rem] px-[4.125rem] justify-between items-center absolute bottom-[1.875rem]'>
          <figure className='flex max-w-[37.5rem] py-[3.125rem] px-[2.25rem] flex-col justify-center items-center gap-[3.125rem] flex-[1_0_0] bg-offwhite shadow-md shadow-brown-shadow text-midgray'>
            <h2 className='text-center max-w-[25.5rem] self-stretch'>
              {title}
            </h2>
            <figcaption className='max-w-[25.5rem] self-stretch text-center'>
              Redesigning a study participant’s profile page as a hub of tagged
              data
            </figcaption>
          </figure>
        </div>
      </header>

      <main className='flex pb-[1.875rem] flex-col items-center gap-[1.875rem] 2xl:gap-[3.75rem] self-stretch'>
        <section
          id={`${name}-background`}
          className='flex max-w-[54rem] py-[0rem] px-[1.875rem] flex-col justify-center items-center gap-[1.875rem] 2xl:gap-[3.75rem self-stretch]'
        >
          <p className='self-stretch'>
            <strong>As developer of the Canadian Open Parkinson Network</strong>
            , I created its LORIS platform, a research management software and
            patient database. Collaborating with stakeholders, I developed a
            scalable web-based solution to facilitate the network’s collection,
            storage, and release of study participants’ de-identified data.
          </p>
        </section>
        {/* THE PROBLEM SECTION */}
        <section
          id={`${name}-problem`}
          className='flex max-w-[54rem] pt-[1.875rem] px-[1.875rem] pb-[0rem] flex-col items-start gap-[1.875rem] 2xl:gap-[3.75rem] self-stretch w-full mx-auto'
        >
          <h2 className='self-stretch'>THE PROBLEM</h2>
          <p className='self-stretch'>
            A clinical research coordinator’s problem is that she needs to
            easily view a snapshot of a study participant’s data to quickly
            determine where they are in their study journey. How can we provide
            a visual overview of key research data in a single format, enabling
            quick analysis, informed decision-making, and effective tracking of
            a patient’s progress in the research study?
          </p>
        </section>
        {/* THE SOLUTION SECTION */}
        <section
          id={`${name}-solution`}
          className='flex max-w-[54rem] flex-col items-center gap-[1.875rem] 2xl:gap-[3.75rem] self-stretch w-full mx-auto'
        >
          <header className='flex pt-[1.875rem] px-[1.875rem] pb-[0rem] justify-center items-center self-stretch'>
            <h2 className='flex-[1_0_0]'>the solution</h2>
          </header>
          {/* Role banner box */}
          <div className='flex max-w-[50.25rem] py-[1.875rem] px-[0rem] flex-col items-center self-stretch text-center'>
            <div className='flex px-[3.75rem] py-[6.25rem] justify-center items-end self-stretch bg-white'>
              {/* text container */}
              <div className='flex flex-col justify-center items-center gap-[2.5rem] flex-[1_0_0]'>
                {/* role */}
                <div className='flex flex-col justify-center gap-[0.94rem] self-stretch'>
                  <h6 className='self-stretch'>Role</h6>
                  <p className='self-stretch'>Sole UI designer, developer</p>
                </div>
                {/* duration */}
                <div className='flex flex-col justify-center gap-[0.94rem] self-stretch'>
                  <h6 className='self-stretch'>Duration</h6>
                  <p className='self-stretch'>1 month</p>
                </div>
                {/* tools */}
                <div className='flex flex-col justify-center gap-[0.94rem] self-stretch'>
                  <h6 className='self-stretch'>Tools</h6>
                  <p className='self-stretch'>Sketch, React</p>
                </div>
              </div>
            </div>
          </div>
          <div className='flex py-[0rem] px-[1.875rem] justify-center items-center self-stretch'>
            <p className='flex-[1_0_0]'></p>
          </div>
          <div className='flex max-w-[50.25rem] py-[0.625rem] px-[0rem] flex-col items-center self-stretch'>
            <Image
              src='/patient_profile_demo@2x.jpg'
              width={2880}
              height={1508}
              alt={`demo of patient profile page on a laptop `}
              className='self-stretch aspect-[804.00/539.34]'
            />
          </div>
          <div className='flex py-[0rem] px-[1.875rem] justify-center items-center self-stretch'>
            <p className='flex-[1_0_0]'>
              In designing the participant profile page, I envisioned a hub from
              which all different types of data can be accessed. I grouped the
              information in chunks identified by data type to help with content
              processing, and added markers of data availability at the top of
              the page, also grouped by data type. These availability chips
              enable study coordinators to immediately see the status of a
              patient’s data collection, and therefore their progression in the
              study timeline. Furthermore, the coordinator has the option of
              seeing as little or as much information as possible thanks to
              collapsible panels that group the content. Clicking on the body of
              the panels navigates the user to a close-up view of the data for
              further analysis.
            </p>
          </div>
        </section>
        {/* RESULTS SECTION */}
        <section
          id={`${name}-results`}
          className='flex max-w-[54rem] pt-[1.875rem] px-[1.875rem] pb-[0rem] flex-col items-center gap-[1.875rem] 2xl:gap-[3.75rem] self-stretch w-full mx-auto'
        >
          <h2 className='self-stretch'>the results</h2>
          <p className='flex-[1_0_0] self-stretch'>
            Redesigning the table of information from the initial participant
            profile page into a visual representation of data tells a story of a
            participant’s study journey.
          </p>
          {/* images container */}
          <div className='flex max-w-[50.25rem] py-[0.625rem] px-[0rem] flex-col items-start self-stretch'>
            <figure className='flex p-[1.875rem] flex-col items-start gap-[1.875rem] self-stretch bg-lightgray opacity-80'>
              <Image
                src='/result-img-1@2x.jpg'
                width={2880}
                height={1359}
                alt={`screenshot of patient profile page before changes`}
                className='self-stretch aspect-[744.00/352.49]'
              />
              <figcaption className='p-[1.875rem]'>
                Profile page showing participant metadata before (top) and after
                (bottom) implementing redesign.
              </figcaption>
            </figure>
            <figure className='flex p-[1.875rem] flex-col items-start gap-[1.875rem] self-stretch bg-lightgray opacity-80'>
              <Image
                src='/result-img-2@2x.jpg'
                width={1920}
                height={1054}
                alt={`screenshot of patient profile page after changes`}
                className='self-stretch aspect-[744.00/411.75]'
              />
            </figure>
          </div>
          <p className='flex-[1_0_0] self-stretch'>
            The new participant-centric dashboard organizes and presents the
            data visually. Grouping the data and implementing the use of colour
            to communicate status helped coordinators to quickly process the
            information and easily identify their next steps.
          </p>
          {/* Image 2 container */}
          <div className='flex max-w-[50.25rem] py-[0.625rem] px-[0rem] flex-col items-center self-stretch'>
            <figure className='flex p-[1.875rem] flex-col items-start gap-[1.875rem] self-stretch bg-lightgray opacity-80'>
              <Image
                src='/result-img-3@2x.jpg'
                width={2851}
                height={1800}
                alt={`screenshot of patient profile page after changes`}
                className='self-stretch aspect-[744.00/411.75]'
              />
            </figure>
          </div>
          {/* quote block */}
          <div className='flex py-[2.5rem] px-[0rem] flex-col items-start gap-[2.5rem] self-stretch'>
            <blockquote
              className='flex py-[0rem] pr-[1.875rem] pl-[5rem] justify-center items-center self-stretch'
              cite='https://lawsofux.com/chunking/'
            >
              <h4 className='flex-[1_0_0] text-right'>
                “Chunking enables users to easily scan content. It allows them
                to easily identify the information that aligns with their goals
                and process that information to achieve their goals more
                quickly.”
              </h4>
            </blockquote>
            <div className='flex py-[0rem] px-[1.875rem] justify-end items-center self-stretch'>
              <strong className='text-right'>
                —<cite>Laws of UX</cite>
              </strong>
            </div>
          </div>
          <p className='flex-[1_0_0] self-stretch'>
            We also received positive feedback from stakeholders who appreciated
            the use of visual elements such as images, colour coding, and chips.
            These elements brought the data to life, and successfully showed the
            breadth of data that the project was collecting. This visual
            representation of the scope of the database was material the
            project’s directors were happy to share when communicating with the
            community.
          </p>
        </section>
        {/* NEXT STEPS SECTION */}
        <section
          id={`${name}-next-steps`}
          className='flex max-w-[54rem] pt-[1.875rem] px-[1.875rem] pb-[0rem] flex-col items-start gap-[1.875rem] 2xl:gap-[3.75rem] self-stretch w-full mx-auto'
        >
          <h2 className='self-stretch'>next steps</h2>
          <p className='self-stretch'>
            To improve the data chunking further, I would reorganize the
            metadata to be grouped as one instead of broken down into separate
            sections. Consolidating the patient information and candidate
            parameter panels would highlight these data points as higher level
            study data, and separate them from the visit-specific data that
            illustrates the participant’s progress in the study. Furthermore, I
            would make consistent the language used to describe a study
            participant. Currently, patient, candidate, and participant are all
            used synonymously. Choosing only one to use throughout the interface
            would further enable quick understanding of the data.
          </p>
        </section>
      </main>
    </>
  );
}
