import Image from 'next/image';

export default function Page() {
  const title = 'patient dashboard';
  const name = 'patient-dashboard';
  return (
    <>
      <header className='flex flex-col items-center self-stretch relative'>
        <div className='flex min-h-[43.75rem] justify-center items-start gap-[0.625rem] self-stretch relative'>
          <div className='flex min-h-[31.25rem] pt-[1.25rem] justify-center items-start absolute left-[-3.375rem] bg-white'>
            <Image
              src='/data-entry-graphic@2x.jpg'
              // width={4096}
              // height={2391}
              fill={true}
              alt={`graphic depicting research data collection`}
              style={{ objectFit: 'contain' }}
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
        <section
          id={`${name}-solution`}
          className='flex max-w-[54rem] flex-col items-center gap-[1.875rem] 2xl:gap-[3.75rem] self-stretch w-full mx-auto'
        >
          <header className='flex pt-[1.875rem] px-[1.875rem] pb-[0rem] justify-center items-center self-stretch'>
            <h2 className='flex-[1_0_0]'></h2>
          </header>
          <div className='flex max-w-[50.25rem] py-[1.875rem] px-[0rem] flex-col items-center self-stretch'>
            <div className='flex px-[3.75rem] py-[6.25rem] justify-center items-end self-stretch bg-white'></div>
          </div>
          <div className=''></div>
          <div className=''></div>
          <div className=''></div>
        </section>
        <section
          id={`${name}-results`}
          className='flex max-w-[54rem] flex-col items-center gap-[1.875rem] 2xl:gap-[3.75rem] self-stretch w-full mx-auto'
        ></section>
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
