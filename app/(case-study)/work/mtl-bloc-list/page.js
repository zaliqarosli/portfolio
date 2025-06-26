import Image from 'next/image';

export default function Page() {
  const title = 'MTL BLOC LIST';
  const name = 'mtl-bloc-list';
  const description = `Creating a fun, interactive website to explore Montreal’s characteristically distinct bouldering gyms and find the right one for you!`;
  return (
    <>
      <header className='flex flex-col items-center self-stretch relative'>
        <div
          id='bg-image'
          className='flex min-h-[45rem] min-[868px]:min-h-[47.5rem] lg:min-h-[50rem] justify-center items-start self-stretch relative shrink-0'
        >
          <Image
            src='/mtl-bloc-list-map.png'
            width={1578}
            height={1800}
            // fill={true}
            alt={`map of montreal with bouldering gym locations pinned`}
            style={{ objectFit: 'cover', width: '100%' }}
            className='max-w-[68.75rem] min-h-[23.15863rem] max-h-[41.7rem] flex-[1_0_0] aspect-[512.00/593.27] opacity-90'
          />
        </div>
        <div
          id='card-container'
          className='flex px-[4.125rem] justify-between absolute bottom-[2rem]'
        >
          <figure
            id='text-card'
            className='flex max-w-[31.25rem] py-[3.125rem] px-[2.25rem] flex-col justify-center gap-[3.125rem] flex-[1_0_0] bg-offwhite shadow-md shadow-brown-shadow text-darkgray text-center'
          >
            <h2 className='max-w-4/5 sm:max-w-1/2 lg:max-w-4/5 self-center text-center'>
              {title}
            </h2>
            <figcaption className='max-w-[31.25rem] sm:max-w-[50rem] self-center text-center'>
              {description}
            </figcaption>
          </figure>
        </div>
      </header>
      <main className='flex pb-[1.875rem] flex-col items-center gap-[1.875rem] 2xl:gap-[3.75rem] self-stretch'>
        <section
          id={`${name}-background`}
          className='flex max-w-[54rem] px-[1.875rem] flex-col gap-[1.875rem] 2xl:gap-[3.75rem]'
        >
          <p>
            <strong>For an intensive Web Design and UI program</strong>, I was
            tasked with creating a responsive website that applied Design and UX
            Principles as well as latest web standards and best practices.
            Before developing this Final Project, I needed to design the UI in
            Figma, and create a working prototype along with a style guide, a UI
            kit, and exported assets.
          </p>
          <h2 className='text-darkgray pt-[1.875rem]'>
            everything begins with an idea
          </h2>
          <p>
            As a long-time climber who has seen the sport of climbing grow in
            popularity around me, I wanted to create something for those new to
            the climbing scene in Montreal. With the sport’s rise in demand and
            commerciality over the last 5 years, Montreal has seen the opening
            of 5 new gyms within that same timeframe. Due to the increase in
            options, I often hear from visitors and beginners:
          </p>
          {/* quote block */}
          <div className='py-[0.625rem]'>
            <blockquote className='flex py-[0rem] pr-[1.875rem] pl-[5rem] justify-center items-center self-stretch'>
              <h4 className='flex-[1_0_0] text-right'>
                “Which bouldering gym should I go to?”
              </h4>
            </blockquote>
          </div>
        </section>
        <section
          id={`${name}-problem`}
          className='flex flex-col gap-[1.875rem] 2xl:gap-[3.75rem] items-center'
        >
          <header className='flex max-w-[54rem] pt-[1.875rem] px-[1.875rem] flex-col gap-[1.875rem] 2xl:gap-[3.75rem]'>
            <h2 className='text-darkgray'>asking the audience</h2>
            <p>
              To help answer this question, I decided to create MTL BLOC LIST, a
              directory of Montreal’s bouldering gyms that focuses on the
              character and culture of each gym, letting climbers find the one
              that suits them best. All starting with a simple, playful question
              that piques the climber you are deep down.
            </p>
          </header>
          <div
            id='img-container-1'
            className='flex max-w-[67.5rem] py-[0.625rem] justify-center items-center'
          >
            <Image
              src='/mtl-bloc-list-screenshot@2x.jpg'
              width={2880}
              height={1800}
              alt={`landing page of mtl bloc list`}
              className='aspect-[430.00/337.82]'
            />
          </div>
          <div
            id='par-2'
            className='flex max-w-[54rem] px-[1.875rem] flex-col gap-[1.875rem] 2xl:gap-[3.75rem]'
          >
            <div className='flex flex-col gap-[1.875rem]'>
              <p>
                To determine the character and culture of a gym, I chose to boil
                it down to the age old debate in climbing style: Old-School vs.
                New-School.
              </p>
              <p>
                While the contrasting styles directly define the flavour of
                climbing, it also implicates differing values and mentalities,
                attracting different types of climbers. The culture of climbing
                was once dominated by old-school “dirtbags” of the outdoors.
                Whereas now, a new-school culture of indoor plastic pullers is
                gaining influence, thanks to the rising popularity of
                competition climbing. More and more, the “comp kids” are now
                taking the reins.
              </p>
              <p>
                To find out how people identified a gym’s climbing style, I
                asked climbers in Montreal to rate bouldering gyms they know on
                a scale from 1 to 5, from Old-School to New-School.
              </p>
            </div>
            <div
              id='survey-results'
              className='flex flex-col justify-center items-center gap-[1.875rem] 2xl:gap-[3.75rem]'
            ></div>
          </div>
        </section>
        <section
          id={`${name}-solution`}
          className='flex flex-col gap-[1.875rem] 2xl:gap-[3.75rem] items-center'
        >
          <header className='max-w-[54rem] pt-[1.875rem] px-[1.875rem] w-full'>
            <h2>the making of mtl bloc list</h2>
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
                  <p className='self-stretch'>Sole designer, developer</p>
                </div>
                {/* Duration */}
                <div
                  id='duration'
                  className='flex flex-col justify-center gap-[0.94rem] self-stretch'
                >
                  <h6 className='self-stretch'>Duration</h6>
                  <p className='self-stretch'>2 months</p>
                </div>
                {/* tools */}
                <div
                  id='tools'
                  className='flex flex-col justify-center gap-[0.94rem] self-stretch'
                >
                  <h6 className='self-stretch'>Tools</h6>
                  <p className='self-stretch'>
                    Figma, Adobe Photoshop, Adobe Illustrator, Visual Studio
                    Code
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            id='intro'
            className='flex max-w-[54rem] px-[1.875rem] flex-col gap-[1.875rem] 2xl:gap-[3.75rem]'
          >
            <div className='flex flex-col gap-[1.875rem] self-stretch'>
              <p>
                Based on the results of the survey, I ranked the gyms from most
                old-school to most new-school, giving them a score out of 100.
              </p>
              <p>
                {`I imagined the landing page inviting the user to answer a
                question, the response to which would generate a gym whose score
                matched the user's input.`}
              </p>
              <p>
                I began to sketch out ideas and expanded on the one I liked the
                most.
              </p>
            </div>
            <div
              id='sketches-cont'
              className='flex py-[1.875rem] flex-col justify-center items-center '
            >
              <figure className='flex items-center justify-center gap-[2.5rem] flex-wrap bg-offwhite'></figure>
            </div>
          </div>
          <section
            id='visual-language'
            className='flex flex-col gap-[1.875rem] 2xl:gap-[3.75rem] items-center'
          >
            <header className='flex flex-col max-w-[54rem] px-[1.875rem] w-full gap-[1.875rem] 2xl:gap-[3.75rem]'>
              <h3>Defining the visual language</h3>
              <p>
                {`To solidify the idea, I wrote up a simple design brief to
                establish the project’s overview, its goals and objectives, and
                its target audience. Better understanding these starting points
                helped me shape the visual design of the project.`}
              </p>
            </header>

            <div
              id='design-brief-cont'
              className='flex py-[0.625rem] px-[1.875rem] justify-center items center'
            >
              <Image
                src='/design-brief@2x.jpg'
                width={595}
                height={842}
                alt={`mtl bloc list design brief`}
                className='max-w-[31.25rem] max-h-[44.17538rem] flex-[1_0_0] aspect-[370.00/523.04]'
              />
            </div>
            <div
              id='par-2-cont'
              className='flex max-w-[54rem] px-[1.875rem] flex-col gap-[1.875rem] 2xl:gap-[3.75rem]'
            >
              <p>
                From there, I looked for inspiration from other web designs,
                picking visual and interactive elements that I thought would be
                effective.
              </p>
              <p>
                For its content and interaction, I wanted the website to
                constantly give visual feedback throughout the user’s journey. I
                knew I wanted to incorporate the quiz on the landing page, which
                would navigate the user to selected content.
              </p>
            </div>
            <div
              id='imgs-cont'
              className='flex max-w-[67.5rem] py-[0.625rem] justify-center items-center content-center gap-[1.875rem] 2xl:gap-[3.75rem] flex-wrap'
            >
              <div
                id='img-1-cont'
                className='flex py-[2.5rem] px-[1.25rem] justify-center items-center bg-[#1D1D1B]'
              >
                <Image
                  src='/inspo-1@2x.jpg'
                  width={1808}
                  height={4023}
                  alt={`content and interaction inspiration for mtl bloc list`}
                  className='h-[54rem] w-auto aspect-[388/861]'
                />
              </div>
              <div
                id='img-2-cont'
                className='flex py-[2.5rem] px-[1.25rem] justify-center items-center bg-[#F2F2F2]'
              >
                <Image
                  src='/inspo-2@2x.jpg'
                  width={1388}
                  height={4096}
                  alt={`style and design inspiration for mtl bloc list`}
                  className='h-[54rem] w-auto aspect-[388/861]'
                />
              </div>
            </div>
            <div
              id='par-3-cont'
              className='flex max-w-[54rem] px-[1.875rem] flex-col gap-[1.875rem] 2xl:gap-[3.75rem]'
            >
              <p>
                {`For its visual style, I knew I wanted to keep the website’s
                overall feel bright and colourful, to reflect the playful nature
                of climbing. At the same time, I wanted to balance that
                playfulness with climbing’s reputation as the “cool new sport”,
                by giving it a bit of edge.`}
              </p>
              <p>
                {`After gathering my inspiration research, I was ready to create
                my mood board to curate the project’s visual language.`}
              </p>
            </div>
            <div
              id='imgs-cont-3'
              className='flex py-[0.625rem] justify-center items-center content-center'
            >
              <div
                id='img-cont-2'
                className='flex p-[2.5rem] justify-center items-center content-center gap-[2.5rem] flex-[1_0_0] flex-wrap bg-darkgray'
              >
                <Image
                  src='/colour-style@3x.jpg'
                  width={1440}
                  height={1440}
                  alt={`colour moodboard for mtl bloc list`}
                  className='min-w-[21.875rem] max-w-[50rem] min-h-[21.875rem] max-h-[50rem] flex-[1_0_0] aspect-[1/1]'
                />
                <Image
                  src='/type-style@4x.jpg'
                  width={1440}
                  height={1440}
                  alt={`font style for mtl bloc list`}
                  className='min-w-[21.875rem] max-w-[50rem] min-h-[21.875rem] max-h-[50rem] flex-[1_0_0] aspect-[1/1]'
                />
              </div>
            </div>
            <p className='max-w-[54rem] px-[1.875rem]'>
              Staying true to the findings of my research, I created a mood
              board for typography and colour that would be the basis of my
              style guide. I expressed the concept of play successfully, and
              found the right mix of edgy but reliable with the font choice.
            </p>
          </section>
          <section
            id='designing-figma'
            className='flex max-w-[54rem] p-[1.875rem] pb-[0rem] flex-col gap-[1.875rem] 2xl:gap-[3.75rem]'
          >
            <h3>Designing in Figma</h3>
            <p>
              Using the layout sketches I had made earlier, I started by
              creating the Landing Page. I opted for a desktop-first approach to
              allow for more creativity in my designs and to build a richer
              visual experience without mobile constraints.
            </p>
            <Image
              src='/landing-page-v1.jpg'
              width={1728}
              height={1200}
              alt={`initial design of mtl bloc list landing page`}
              className='aspect-[804.00/525.86] bg-lightgray shadow-md shadow-black/25'
            />
          </section>
        </section>
        <section
          id={`${name}-next-steps`}
          className='flex max-w-[54rem] pt-[1.875rem] px-[1.875rem] flex-col gap-[1.875rem] 2xl:gap-[3.75rem]'
        ></section>
      </main>
    </>
  );
}
