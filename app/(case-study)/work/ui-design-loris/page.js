import Image from 'next/image';

export default function Page() {
  const title = 'UI DESIGN FOR LORIS';
  const name = 'ui-design-loris';
  const description =
    'Optimizing research software’s UI to enable users to easily and accurately enter data';
  return (
    <>
      <header className='flex flex-col items-center self-stretch relative'>
        <div
          id='bg-image'
          className='flex min-h-[43.75rem] justify-center items-start self-stretch relative'
        >
          <div
            id='fill-container'
            className='flex min-h-[31.25rem] justify-center items-start absolute bg-[#F8F9FE] w-full'
          >
            <Image
              src='/data-entry-graphic-loris@2x.jpg'
              width={4096}
              height={2484}
              // fill={true}
              alt={`graphic depicting form data collection`}
              style={{ objectFit: 'contain', width: '100%' }}
              className='max-w-[68.75rem] min-h-[23.15863rem] max-h-[41.7rem] flex-[1_0_0] aspect-[611.00/370.54]'
            />
          </div>
        </div>
        <div
          id='card-container'
          className='flex py-[0rem] px-[4.125rem] justify-between items-center absolute bottom-[2.375rem]'
        >
          <figure
            id='text-card'
            className='flex max-w-[37.5rem] py-[3.125rem] px-[2.25rem] flex-col justify-center items-center gap-[3.125rem] flex-[1_0_0] bg-offwhite shadow-md shadow-brown-shadow text-darkgray text-center'
          >
            <h2 className='max-w-[12.25rem] sm:max-w-[25.25rem]] self-center text-center'>
              {title}
            </h2>
            <figcaption className='max-w-[12.25rem] sm:max-w-[25.25rem] self-stretch text-center'>
              {description}
            </figcaption>
          </figure>
        </div>
      </header>
      <main className='flex pb-[1.875rem] flex-col items-center gap-[1.875rem] 2xl:gap-[3.75rem] self-stretch'>
        <section
          id={`${name}-background`}
          className='flex max-w-[54rem] py-[0rem] px-[1.875rem] justify-center items-center self-stretch]'
        >
          <p className='self-stretch'>
            <strong>As part of the UX/UI Special Interest Group</strong> at the
            McGill Centre for Integrative Neuroscience, I was tasked with
            optimizing and modernizing the look and usability of LORIS, a
            research and project management software. By applying UX and design
            principles and establishing design standards, we sought out to
            improve its interface.
          </p>
        </section>
        <section
          id={`${name}-problem`}
          className='flex max-w-[54rem] pt-[1.875rem] pb-[0rem] px-[1.875rem] flex-col items-start gap-[1.875rem] 2xl:gap-[3.75rem self-stretch]'
        >
          <h2 className='self-stretch'>THE PROBLEM</h2>
          <p className='self-stretch'>
            One of our focuses was to optimize the data entry user’s journey. A
            data entry personnel’s problem is that she needs to easily and
            quickly complete her data entry task so that she can attend to other
            tasks in her busy schedule. How can we ensure that she can easily
            find and complete the forms accurately so that she can be productive
            with her time? Our main desire was to lessen the user’s cognitive
            load. From user feedback, we learned that LORIS’ primary colour,
            LORIS blue, was applied too heavily across the interface, making it
            overwhelming. It was also noted that whitespace and contrast were
            underused, particularly in the navigation bar. The lack of colour
            variation and text hierarchy made navigating less intuitive. 
            Furthermore, we heard from users that their workflow of directly
            entering data from paper to screen was made more difficult by the
            misalignment of the digital forms and its mismatch with its paper
            version.
          </p>
        </section>
        <section
          id={`${name}-solution`}
          className='flex flex-col items-center gap-[1.875rem] 2xl:gap-[3.75rem self-stretch]'
        >
          <header className='flex max-w-[54rem] pt-[1.875rem] px-[1.875rem] pb-[0rem] justify-center items-center self-stretch'>
            <h2 className='max-w-[54rem] flex=[1_0_0]'>THE SOLUTION</h2>
          </header>
          <div
            id='role-section-container'
            className='flex px-[1.875rem] py-[0rem] flex-col items-center self-stretch'
          >
            <div className='flex max-w-[50.25rem] px-[3.75rem] py-[6.25rem] justify-center items-end self-stretch bg-white text-center'>
              {/* text container */}
              <div className='flex flex-col justify-center items-center gap-[2.5rem] flex-[1_0_0]'>
                {/* role */}
                <div className='flex flex-col justify-center items-center gap-[0.94rem] self-stretch'>
                  <h6 className='self-stretch'>Role</h6>
                  <p className='self-stretch'>
                    UI designer, developer in team of 6
                  </p>
                </div>
                {/* duration */}
                <div className='flex flex-col justify-center gap-[0.94rem] self-stretch'>
                  <h6 className='self-stretch'>Scope</h6>
                  <p className='self-stretch'>
                    Created chosen colour style, proposed use of icon toolkit,
                    issued all code changes{' '}
                  </p>
                </div>
                {/* tools */}
                <div className='flex flex-col justify-center gap-[0.94rem] self-stretch'>
                  <h6 className='self-stretch'>Tools</h6>
                  <p className='self-stretch'>
                    Sketch, Adobe Color, CSS, Font Awesome, Bootstrap
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            id='par-1'
            className='flex max-w-[54rem] py-[0rem] px-[1.875rem] flex-col justify-center items-center self-stretch'
          >
            <p className='self-stretch'>
              To solve these problems, we focused on 3 areas: colour system,
              alignment, and iconography.
            </p>
          </div>
          <div
            id='colour-system'
            className='flex max-w-[54rem] flex-col items-center gap-[1.875rem] self-stretch'
          >
            <section
              id='section-1'
              className='flex pt-[1.875rem] px-[1.875rem] pb-[0rem] flex-col justify-center items-start gap-[1.875rem] self-stretch'
            >
              <h3 className='self-stretch'>Colour system</h3>
              <p className='self-stretch'>
                We created a text hierarchy by defining a colour system and
                applied it to the navigation bar to make navigational elements
                and their states easier to identify. Basing our decisions on the
                user feedback, we wanted to implement colours that would lighten
                the user’s cognitive load and take advantage of the
                Aesthetic-Usability Effect. We created a colour system in order
                to maintain a consistent and clear visual hierarchy and style. 
                We decided to preserve the LORIS blue as it effectively
                represents and serves the field of the product. However, we knew
                that we could only sparingly use it due to how dark it was.
                Therefore, we defined a system that would include variants for
                the primary colour and a secondary colour that would be
                complementary to the first.  We came up with various colour
                styles that were created with the software’s use case in mind.
                We pulled out palettes from contextual imagery such as brain
                scans, and considered colour psychology in our choices. To
                select our final colour style, we conducted testing on users and
                chose the style that received the most positive reviews.  The
                final selected style ended up being the one that I had created.
              </p>
            </section>
            <section
              id='section-2'
              className='flex max-w-[31.5rem] py-[0.625rem] px-[0rem] items-center'
            >
              <div className='flex p-[3.75rem] items-center flex-[1_0_0] bg-darkgray'>
                <div className='flex flex-col items-end flex-[1_0_0]'>
                  <figure className='flex h-[9.6875rem] 2xl:h-[12rem] p-[1rem] flex-col justify-end items-center aspect-square bg-[#064785]'>
                    <figcaption className='text-white'>#064785</figcaption>
                  </figure>
                  <figure className='flex h-[9.6875rem] 2xl:h-[12rem] p-[1rem] flex-col justify-end items-center aspect-square bg-[#246EB6]'>
                    <figcaption className='text-white'>#246EB6</figcaption>
                  </figure>
                  <figure className='flex h-[9.6875rem] 2xl:h-[12rem] p-[1rem] flex-col justify-end items-center aspect-square bg-[#E4EBF2]'>
                    <figcaption className='text-darkgray'>#E4EBF2</figcaption>
                  </figure>
                </div>
                <div className='flex flex-col items-start flex-[1_0_0]'>
                  <figure className='flex h-[9.6875rem] 2xl:h-[12rem] p-[1rem] flex-col justify-end items-center aspect-square bg-[#E89A0C]'>
                    <figcaption className='text-darkgray'>#E89A0C</figcaption>
                  </figure>
                  <figure className='flex h-[9.6875rem] 2xl:h-[12rem] p-[1rem] flex-col justify-end items-center aspect-square bg-[#FFBE00]'>
                    <figcaption className='text-darkgray'>#FFBE00</figcaption>
                  </figure>
                  <figure className='flex h-[9.6875rem] 2xl:h-[12rem] p-[1rem] flex-col justify-end items-center aspect-square bg-[#FFFFFF]'>
                    <figcaption className='text-darkgray'>#FFFFFF</figcaption>
                  </figure>
                </div>
              </div>
            </section>
            <section
              id='section-3'
              className='flex flex-col max-w-[54rem] py-[0rem] px-[1.875rem] justify-center items-center gap-[1.875rem] self-stretch'
            >
              <p>
                In testing the styles, I learned to think critically about
                colour application in visual hierarchy. I created a focused
                colour style and applied it as follows:
              </p>
              <ol className='list-decimal indent-5'>
                <li>
                  <strong>Primary colour</strong>: LORIS blue for navigation bar
                  and branding
                </li>
                <li>
                  <strong>Primary colour variant</strong>: Darker Blue variant
                  for primary buttons
                </li>
                <li>
                  <strong>Secondary colour</strong>: Orange for links in hover
                  states
                </li>
              </ol>
              <p>
                I sent a prototype and created a pull request with this new
                colour system for further feedback, and refined and iterated
                before it was merged into the codebase.
              </p>
            </section>
          </div>
          <div id='alignment'> </div>
          <div id='iconography'></div>
        </section>
        <section
          id={`${name}-results`}
          className='flex flex-col items-center gap-[1.875rem] 2xl:gap-[3.75rem self-stretch]'
        ></section>
        <section
          id={`${name}-next-steps`}
          className='flex max-w-[54rem] pt-[1.875rem] pb-[0rem] px-[1.875rem] flex-col items-center gap-[1.875rem] 2xl:gap-[3.75rem self-stretch]'
        ></section>
      </main>
    </>
  );
}
