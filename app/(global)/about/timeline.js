import { myJourney } from '@/app/lib/my-journey';
import InfoConnector from '@/app/ui/components/info-connector';

export default function Timeline() {
  let currentYear = '';
  const timeline = myJourney.map((entry, i) => {
    const location = entry.location || '-';
    const description = entry.description || '-';

    // create title subheaders
    const subheaders = [];
    entry.roles.forEach((role, j) => {
      let titles = [];
      let connectors = [];

      // Display year logic
      let displayYear = false;
      if (role.year != currentYear) {
        displayYear = true;
        currentYear = role.year;
      }

      if (j === 0) {
        // create subheader with year and title containers
        // insert connector group and title group into title container
        // insert year text into year container if its not already been displayed
        // push connector dash to connector group if display year is true
        // push role.title to title group
        titles.push(<h6>{role.title}</h6>);
        // if roles.length > 1, push double info connector to connector group and roles[1].title to title group
        if (entry.roles.length > 1) {
          connectors.push(<InfoConnector key={i + j} type='double' />);
          titles.push(<h6>{entry.roles[1].title}</h6>);
        }
      } else if (j === 1) {
        // else if j === 1, continue
        return;
      } else {
        // else create new subheader with year and title containers
        // insert connector group and title group into title container
        // insert year text into year container if its not already been displayed
        // push connector dash to connector group is display year is true
        // push role.title to title group
        titles.push(<h6>{role.title}</h6>);
        // push single info connection to connector group
        connectors.push(<InfoConnector key={i + j} />);
      }

      subheaders.push(
        <div
          id={`subheader-${i}-${j}`}
          className='flex items-start self-stretch'
        >
          <div
            id={`year-container-${i}-${j}`}
            className='flex w-[4.375rem] pt-[0.8125rem] pr-[0.625rem] justify-end items-center self-stretch'
          >
            {displayYear && <p>{currentYear}</p>}
          </div>
          <div
            id={`title-container-${i}-${j}`}
            className='flex pt-[0.9375rem] items-center flex-[1_0_0] self-stretch border-l border-solid border-midgray'
          >
            <div
              id={`connector-group-${i}-${j}`}
              className='flex w-[1.25rem] pb-[0.125rem] flex-col items-end'
            >
              {displayYear && (
                <div className='pt-[0.375rem] border-b border-solid border-midgray'></div>
              )}
              {connectors}
            </div>
            <div
              id={`title-group-${i}-${j}`}
              className='flex flex-col justify-center items-center gap-[0.9375rem]'
            >
              {titles}
            </div>
          </div>
        </div>
      );
    });

    // create text container
    const textContainer = (
      <div
        id={`text-container-${i}`}
        className='flex pl-[4.375rem] flex-col items-start self-stretch'
      >
        <figure className='flex pt-[0.9275rem] flex-col items-start gap-[0.9375rem] self-stretch border-l border-solid border-midgray'>
          <p id={`location-${i}`} className='pl-[1.875rem]'>
            {location}
          </p>
          <figcaption className='text-secondary pl-[3.4375rem]'>
            {description}
          </figcaption>
        </figure>
      </div>
    );

    return (
      <div
        id={`experience-${i}`}
        className='flex flex-col items-start self-stretch'
      >
        {subheaders}
        {textContainer}
      </div>
    );
  });

  return <>{timeline}</>;
}
