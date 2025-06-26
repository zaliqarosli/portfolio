import Image from 'next/image';

export default function Page() {
  const title = 'UI DESIGN FOR LORIS';
  const name = 'ui-design-loris';
  const description = `Optimizing research software’s UI to enable users to easily and accurately enter data`;
  return (
    <>
      <header className='flex flex-col items-center self-stretch relative'>
        <div
          id='bg-image'
          className='flex min-h-[45rem] min-[868px]:min-h-[47.5rem] lg:min-h-[50rem] justify-center items-start self-stretch relative'
        >
          <div
            id='fill-container'
            className='flex min-h-[31.25rem] justify-center items-center absolute bg-[#F8F9FE] w-full'
          >
            <Image
              src='/data-entry-graphic-loris@2x.jpg'
              width={4096}
              height={2484}
              // fill={true}
              alt={`graphic depicting form data collection`}
              style={{ objectFit: 'cover', width: '100%' }}
              className='max-w-[68.75rem] min-h-[23.15863rem] max-h-[41.7rem] flex-[1_0_0] aspect-[611.00/370.54]'
            />
          </div>
        </div>
        <div
          id='card-container'
          className='flex py-[0rem] px-[4.125rem] justify-between absolute bottom-[2.375rem]'
        >
          <figure
            id='text-card'
            className='flex max-w-[37.5rem] py-[3.125rem] px-[2.25rem] flex-col justify-center gap-[3.125rem] flex-[1_0_0] bg-offwhite shadow-md shadow-brown-shadow text-darkgray text-center'
          >
            <h2 className='max-w-4/5 sm:max-w-1/2 lg:max-w-4/5 self-center text-center'>
              {title}
            </h2>
            <figcaption className='max-w-[12.25rem] sm:max-w-[25.25rem] self-center text-center'>
              {description}
            </figcaption>
          </figure>
        </div>
      </header>
      <main className='flex pb-[1.875rem] flex-col items-center gap-[1.875rem] 2xl:gap-[3.75rem] self-stretch'>
        <section
          id={`${name}-background`}
          className='flex max-w-[54rem] py-[0rem] px-[1.875rem] justify-center'
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
          className='flex max-w-[54rem] pt-[1.875rem] pb-[0rem] px-[1.875rem] flex-col items-start gap-[1.875rem] 2xl:gap-[3.75rem]'
        >
          <h2 className='self-stretch'>THE PROBLEM</h2>
          <div className='flex flex-col gap-[1.875rem] self-stretch'>
            <p>
              {`One of our focuses was to optimize the data entry user’s journey.
              A data entry personnel’s problem is that she needs to easily and
              quickly complete her data entry task so that she can attend to
              other tasks in her busy schedule. How can we ensure that she can
              easily find and complete the forms accurately so that she can be
              productive with her time?`}
            </p>
            <p>
              {`Our main desire was to lessen the user’s cognitive load. From user
              feedback, we learned that LORIS’ primary colour, LORIS blue, was
              applied too heavily across the interface, making it overwhelming.
              It was also noted that whitespace and contrast were underused,
              particularly in the navigation bar. The lack of colour variation
              and text hierarchy made navigating less intuitive.`}
            </p>
            <p>
              Furthermore, we heard from users that their workflow of directly
              entering data from paper to screen was made more difficult by the
              misalignment of the digital forms and its mismatch with its paper
              version.
            </p>
          </div>
        </section>
        <section
          id={`${name}-solution`}
          className='flex flex-col gap-[1.875rem] 2xl:gap-[3.75rem] max-w-full w-auto'
        >
          <header className='max-w-[54rem] pt-[1.875rem] px-[1.875rem]'>
            <h2>THE SOLUTION</h2>
          </header>
          <div
            id='role-section-container'
            className='flex max-w-[50.25rem] py-[1.875rem] px-[0rem] flex-col w-full self-center  text-center'
          >
            <div className='flex py-[3.75rem] px-[6.25rem] justify-center items-end self-stretch bg-white/70'>
              {/* text container */}
              <div
                id='text-container'
                className='flex flex-col justify-center gap-[2.5rem] flex-[1_0_0] 2xl:max-w-4/5'
              >
                {/* role */}
                <div
                  id='role'
                  className='flex flex-col justify-center gap-[0.94rem] self-stretch'
                >
                  <h6 className='self-stretch'>Role</h6>
                  <p className='self-stretch'>
                    UI designer, developer in team of 6
                  </p>
                </div>
                {/* scope */}
                <div
                  id='scope'
                  className='flex flex-col justify-center gap-[0.94rem] self-stretch'
                >
                  <h6 className='self-stretch'>Scope</h6>
                  <p className='self-stretch'>
                    Created chosen colour style, proposed use of icon toolkit,
                    issued all code changes
                  </p>
                </div>
                {/* tools */}
                <div
                  id='tools'
                  className='flex flex-col justify-center gap-[0.94rem] self-stretch'
                >
                  <h6 className='self-stretch'>Tools</h6>
                  <p className='self-stretch'>
                    Sketch, Adobe Color, CSS, Font Awesome, Bootstrap
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div id='par-1' className='max-w-[54rem] py-[0rem] px-[1.875rem]'>
            <p>
              To solve these problems, we focused on 3 areas: colour system,
              alignment, and iconography.
            </p>
          </div>
          <section
            id='colour-system'
            className='flex max-w-[54rem] flex-col items-center gap-[1.875rem]'
          >
            <section
              id='section-1'
              className='flex pt-[1.875rem] px-[1.875rem] pb-[0rem] flex-col justify-center items-start gap-[1.875rem] self-stretch'
            >
              <h3 className='self-stretch'>Colour system</h3>
              <div className='flex flex-col gap-[1.875rem] self-stretch'>
                <p>
                  We created a text hierarchy by defining a colour system and
                  applied it to the navigation bar to make navigational elements
                  and their states easier to identify.
                </p>
                <p>
                  Basing our decisions on the user feedback, we wanted to
                  implement colours that would lighten the user’s cognitive load
                  and take advantage of the Aesthetic-Usability Effect. We
                  created a colour system in order to maintain a consistent and
                  clear visual hierarchy and style.
                </p>
                <p>
                  We decided to preserve the LORIS blue as it effectively
                  represents and serves the field of the product. However, we
                  knew that we could only sparingly use it due to how dark it
                  was. Therefore, we defined a system that would include
                  variants for the primary colour and a secondary colour that
                  would be complementary to the first.
                </p>
                <p>
                  We came up with various colour styles that were created with
                  the software’s use case in mind. We pulled out palettes from
                  contextual imagery such as brain scans, and considered colour
                  psychology in our choices. To select our final colour style,
                  we conducted testing on users and chose the style that
                  received the most positive reviews. The colour style that I
                  had created was in the end the one selected.
                </p>
              </div>
            </section>
            <section
              id='section-2'
              className='flex max-w-[31.5rem] py-[0.625rem] px-[0rem]'
            >
              <div className='flex p-[3.75rem] text-center flex-[1_0_0] bg-darkgray'>
                <div className='flex flex-col items-end flex-[1_0_0]'>
                  <figure className='flex h-[9.6875rem] 2xl:h-[12rem] p-[1rem] flex-col justify-end aspect-square bg-[#064785]'>
                    <figcaption className='text-white'>#064785</figcaption>
                  </figure>
                  <figure className='flex h-[9.6875rem] 2xl:h-[12rem] p-[1rem] flex-col justify-end aspect-square bg-[#246EB6]'>
                    <figcaption className='text-white'>#246EB6</figcaption>
                  </figure>
                  <figure className='flex h-[9.6875rem] 2xl:h-[12rem] p-[1rem] flex-col justify-end aspect-square bg-[#E4EBF2]'>
                    <figcaption className='text-darkgray'>#E4EBF2</figcaption>
                  </figure>
                </div>
                <div className='flex flex-col items-start flex-[1_0_0]'>
                  <figure className='flex h-[9.6875rem] 2xl:h-[12rem] p-[1rem] flex-col justify-end aspect-square bg-[#E89A0C]'>
                    <figcaption className='text-darkgray'>#E89A0C</figcaption>
                  </figure>
                  <figure className='flex h-[9.6875rem] 2xl:h-[12rem] p-[1rem] flex-col justify-end aspect-square bg-[#FFBE00]'>
                    <figcaption className='text-darkgray'>#FFBE00</figcaption>
                  </figure>
                  <figure className='flex h-[9.6875rem] 2xl:h-[12rem] p-[1rem] flex-col justify-end aspect-square bg-[#FFFFFF]'>
                    <figcaption className='text-darkgray'>#FFFFFF</figcaption>
                  </figure>
                </div>
              </div>
            </section>
            <section
              id='section-3'
              className='flex flex-col max-w-[54rem] py-[0rem] px-[1.875rem] justify-center gap-[1.875rem] self-stretch'
            >
              <p>
                In testing the styles, I learned to think critically about
                colour application in visual hierarchy. I created a focused
                colour style and applied it as follows:
              </p>
              <ol className='list-decimal list-inside px-[1.875rem]'>
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
          </section>
          <section
            id='alignment'
            className='flex max-w-[54rem] flex-col gap-[1.875rem]'
          >
            <header
              id='div-1'
              className='flex pt-[1.875rem] px-[1.875rem] flex-col gap-[1.875rem] self-stretch'
            >
              <h3 className='self-stretch'>Alignment</h3>
              <p>
                Before our cleanup, the digital forms that were rendered by
                templates had varied indentation which made it hard to read.
                Users reported that it was frustrating to constantly realign
                their eyes while completing the questionnaires.
              </p>
            </header>
            <div
              id='div-2'
              className='flex max-w-[50.25rem] py-[0.625rem] self-center'
            >
              <div
                id='midgray-container-1'
                className='flex p-[2.5rem] justify-center self-stretch bg-midgray'
              >
                <div
                  id='img-container-1'
                  className='flex pt-[1.25rem] px-[0.625rem] pb-[0.625rem] self-stretch bg-white'
                >
                  <Image
                    src='/rrf_before@4x.jpg'
                    width={1318}
                    height={892}
                    alt={`radiology review form showing misalignment on input labels`}
                    className='self-stretch aspect-[330.00/223.40]'
                  />
                </div>
              </div>
            </div>
            <div id='div-3' className='py-[0rem] px-[1.875rem]'>
              <p>
                We correctly aligned the forms and rendered them as their paper
                version to help decrease cognitive load when completing the
                task.
              </p>
            </div>
            <div
              id='div-4'
              className='flex max-w-[50.25rem] py-[0.625rem] px-[0rem] flex-col self-center'
            >
              {' '}
              <div
                id='midgray-container-2'
                className='flex p-[2.5rem] flex-col items-start self-stretch bg-midgray'
              >
                <div
                  id='img-container-2'
                  className='flex pt-[1.25rem] pr-[0rem] pb-[0.625rem] pl-[0.75rem] flex-col items-start self-stretch bg-white'
                >
                  <Image
                    src='/rrf_after@4x.jpg'
                    width={1396}
                    height={992}
                    alt={`radiology review form with input labels aligned`}
                    className='self-stretch aspect-[338.00/240.18]'
                  />
                </div>
              </div>
            </div>
          </section>
          <section id='iconography' className='flex flex-col gap-[1.875rem]'>
            <header
              id='icon-div-1'
              className='flex max-w-[54rem] pt-[1.875rem] px-[1.875rem] flex-col items-start gap-[1.875rem]'
            >
              <h3>Iconography</h3>
              <p>
                Because LORIS had been first developed in the 90s, a lot of the
                graphics used were from that time and had not yet been updated.
                While the icons had not produced pain points for users at the
                time, as soon as we applied the new colour style, it was clear
                that they needed to be replaced.
              </p>
            </header>
            <figure
              id='icon-div-2'
              className='flex max-w-[50.25rem] py-[0.675rem] px-[0rem] flex-col items-center'
            >
              <div
                id='imgs-cont'
                className='flex max-w-[44rem] py-[2.5rem] px-[3.125rem] justify-center items-start gap-[2.875rem] bg-white/70'
              >
                <div
                  id='img-cont-1'
                  className='flex pt-[0.75rem] pr-[0rem] pb-[0.9375rem] pl-[0.625rem] items-start flex-[1_0_0] aspect-[142.00/250.87] bg-[#0D4983] self-stretch'
                >
                  <Image
                    src='/panel-icon-before-1@4x.jpg'
                    width={498}
                    height={774}
                    alt={`panel UI with outdated, pixelated icons`}
                    className='flex-[1_0_0] aspect-[132.00/214.50]'
                  />
                </div>
                <div
                  id='img-cont-2'
                  className='flex pt-[1.25rem] pr-[0.9375rem] pl-[0.625rem] items-start flex-[1_0_0] aspect-[142.00/250.87] bg-[#E3EAF1] self-stretch'
                >
                  <Image
                    src='/panel-icon-before-2@4x.jpg'
                    width={230}
                    height={452}
                    alt={`panel UI with outdated, pixelated icons`}
                    className='flex-[1_0_0] aspect-[117.00/216.77]'
                  />
                </div>
              </div>
              <div
                id='caption-cont'
                className='flex max-w-[50.25rem] pt-[1.875rem] px-[3.125rem]'
              >
                <figcaption className='flex-[1_0_0]'>
                  Before (left) and after (right) applying new colour style
                </figcaption>
              </div>
            </figure>
            <div
              id='icon-div-3'
              className='flex max-w-[54rem] py-[0rem] px-[1.875rem] justify-center'
            >
              <div className='flex flex-col gap-[1.875rem]'>
                <p className='flex-[1_0_0]'>
                  {`We updated the iconography for a cleaner, and more modern and
                  consistent look. We replaced the outdated icons with
                  FontAwesome’s library, which was easy to manage and also
                  improved performance by allowing us to remove all individual
                  icons from the application’s assets.`}
                </p>
                <p>
                  While merely updating the icons improved the look of the panel
                  by improving clarity, doing so in tandem with the new colour
                  style greatly increased contrast and readability.
                </p>
              </div>
            </div>
            <figure
              id='icon-div-4'
              className='flex max-width-[50.25rem] py-[0rem] px-[1.875rem] flex-col items-center gap-[1.875rem]'
            >
              <div
                id='imgs-cont-2'
                className='flex py-[0.625rem] px-[1.875rem] justify-center min-[804px]:justify-between content-center gap-[1.25rem] flex-wrap self-stretch'
              >
                <div
                  id='img-cont-2-1'
                  className='flex h-[30rem] w-[20.75rem] py-[1.25rem] pr-[0.9375rem] pl-[1.875rem] justify-center aspect-[83/120] bg-[#0D4983]'
                >
                  <Image
                    src='/panel-icon-after-1@4x.jpg'
                    width={470}
                    height={800}
                    alt={`panel UI with fontawesome icons`}
                    className='shrink-0 aspect-[267.00/432.69]'
                  />
                </div>
                <div
                  id='img-cont-2-2'
                  className='flex h-[30rem] w-[20.75rem] p-[1.25rem] justify-center aspect-[83/120] bg-[#E4EBF2]'
                >
                  <Image
                    src='/panel-icon-after-2@4x.jpg'
                    width={492}
                    height={958}
                    alt={`panel UI with fontawesome icons`}
                    className='aspect-[272.00/444.06]'
                  />
                </div>
              </div>
              <div
                id='caption-cont-2'
                className='flex max-w-[50.25rem] py-[0rem] px-[1.875rem] 2xl:px-[1.75rem] justify-center'
              >
                <figcaption className='flex-[1_0_0]'>
                  Implementing FontAwesome icons, followed by the new colour
                  style, in the QC panel
                </figcaption>
              </div>
            </figure>
          </section>
        </section>
        <section
          id={`${name}-results`}
          className='flex flex-col items-center gap-[1.875rem] 2xl:gap-[3.75rem]'
        >
          <header className='flex max-w-[54rem] pt-[1.875rem] px-[1.875rem] flex-col items-start gap-[1.875rem]'>
            <h2 className='self-stretch'>The results</h2>
            <p className='self-stretch'>
              {`Applying the colour system greatly improved the interface, the
              results of which were apparent right away in the user’s journey:
              on the login and dashboard pages.`}
            </p>
          </header>
          <figure
            id='results-fig-1'
            className='flex max-w-[67.5rem] py-[0.625rem] px-[0rem] flex-col items-center gap-[1.875rem]'
          >
            <div
              id='results-imgs-cont'
              className='flex p-[2.5rem] flex-col items-start gap-[1.875rem] self-stretch bg-lightgray/80'
            >
              <Image
                src='/login_old@4x.jpg'
                width={2048}
                height={1159}
                alt={`previous design of loris login page`}
                className='self-stretch aspect-[350.00/221.42]'
              />
              <Image
                src='/login_new_hover@4x.jpg'
                width={2880}
                height={1800}
                alt={`improved design of loris login page`}
                className='self-stretch aspect-[350.00/218.75]'
              />
            </div>
            <div
              id='results-capt-cont'
              className='flex max-w-[50.25rem] py-[0rem] px-[2.5rem] justify-center'
            >
              <figcaption className='flex-[1_0_0]'>
                Login page before (top) and after (bottom) implementing
                solution.
              </figcaption>
            </div>
          </figure>
          <figure
            id='results-fig-2'
            className='flex max-w-[67.5rem] py-[0.625rem] px-[0rem] flex-col items-center gap-[1.875rem]'
          >
            <div
              id='results-imgs-cont-2'
              className='flex p-[2.5rem] flex-col items-start gap-[1.875rem] self-stretch bg-lightgray/80'
            >
              <Image
                src='/dashboard_before@4x.jpg'
                width={2048}
                height={1222}
                alt={`previous design of loris dashboard page`}
                className='self-stretch aspect-[350.00/188.37]'
              />
              <Image
                src='/dashboard_after@4x.jpg'
                width={2048}
                height={1214}
                alt={`improved design of loris dashboard page`}
                className='self-stretch aspect-[350.00/189.72]'
              />
            </div>
            <div
              id='results-capt-cont-2'
              className='flex max-w-[50.25rem] py-[0rem] px-[2.5rem] justify-center'
            >
              <figcaption>
                Dashboard page before (top) and after (bottom) implementing
                solution.
              </figcaption>
            </div>
          </figure>
          <div className='flex max-w-[54rem] py-[0rem] px-[1.875rem] justify-center'>
            <div className='flex flex-col gap-[1.875rem]'>
              <p className='flex-[1_0_0]'>
                The changes were not very extensive in scope and only targeted
                specific elements in the UI. Nonetheless, the feedback we
                received from users after applying the changes on production
                were overwhelmingly positive.
              </p>
              <p>
                Users reported being able to see groups of information more
                clearly, identify links and other navigational elements such as
                primary buttons more easily, and generally felt less overwhelmed
                when using the interface.
              </p>
              <p>
                A data entry personnel reported enjoying completing her task way
                more than before, as entering data from paper into the screen
                was made much easier due to proper alignment of the forms.
                Another end-user also mentioned that the updated icons were more
                desirable to interact with when conducting quality control of
                the data using the QC panel.
              </p>
            </div>
          </div>
        </section>
        <section
          id={`${name}-next-steps`}
          className='flex max-w-[54rem] pt-[1.875rem] px-[1.875rem] flex-col gap-[1.875rem] 2xl:gap-[3.75rem]'
        >
          <h2 className='self-stretch'>NEXT STEPS</h2>
          <div className='flex flex-col gap-[1.875rem]'>
            <p className='self-stretch'>
              During this process, we were able to clean up the CSS along the
              way. This resulted in us also receiving positive feedback from
              developers who appreciated being able to follow a design standard
              and having a clearer CSS layer specificity.
            </p>
            <p className='self-stretch'>
              Going forward, we decided to continue with the CSS cleanup, now
              that a design standard was in place. To minimize the number of CSS
              files required, we opted to move away from utilizing Bootstrap now
              that Grid and Flexbox were part of the CSS specifications. It was
              indeed for the purpose of layout for forms that Bootstrap was
              first implemented.
            </p>
            <p className='self-stretch'>
              Removing the Bootstrap dependency and CSS layer will further
              simplify future development and help establish a consistent visual
              style.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
