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
      let years = [];
      let titles = [];
      let connectors = [];

      // Display year logic
      let displayYear = false;
      if (role.year != currentYear) {
        displayYear = true;
        currentYear = role.year;
      }

      // Check if add on title
      let titleAddOn = false;

      if (j === 0 || j > 1) {
        let connectorRow = [];
        // create subheader with year and title containers
        // insert connector group and title group into title container
        // insert year text into year container if its not already been displayed
        // push connector dash to connector group if display year is true
        // push role.title to title group
        if (displayYear) {
          years.push(<p key={`year-${i}-${j}`}>{role.year}</p>);
          connectorRow.push(
            <div
              key={`connector-year-${i}-${j}-first`}
              id={`connector-year-${i}-${j}-first`}
              className='flex w-[1.25rem] flex-col items-end border-b border-solid border-midgray'
            ></div>
          );
        } else {
          connectorRow.push(
            <div
              key={`connector-year-${i}-${j}-first`}
              id={`connector-year-${i}-${j}-first`}
              className='flex w-[1.25rem] flex-col items-end'
            ></div>
          );
        }
        titles.push(<h6 key={`title-${i}-${j}`}>{role.title}</h6>);
        connectors.push(
          <div
            key={`connector-row-${i}-${j}-first`}
            id={`connector-row-${i}-${j}-first`}
            className='flex'
          >
            {connectorRow}
          </div>
        );

        // if roles.length > 1, push double info connector to connector group and roles[1].title to title group
        connectorRow = [];
        if (j === 0 && entry.roles.length > 1) {
          // Append second role entry to the first
          const secondRole = entry.roles[1];
          // Add year and connector to year container
          if (secondRole.year != currentYear) {
            years.push(<p key={`year-${i}-${j + 1}`}>{secondRole.year}</p>);
            connectorRow.push(
              <div
                key={`connector-year-${i}-${j + 1}-second`}
                id={`connector-year-${i}-${j + 1}-second`}
                className='flex w-[1.25rem] flex-col items-end border-b border-solid border-midgray'
              ></div>
            );
          } else {
            connectorRow.push(
              <div
                key={`connector-year-${i}-${j + 1}-second`}
                id={`connector-year-${i}-${j + 1}-second`}
                className='flex w-[1.25rem] flex-col items-end'
              ></div>
            );
          }
          // Add title and info connector
          titles.push(<h6 key={`title-${i}-${j + 1}`}>{secondRole.title}</h6>);
          connectorRow.push(<InfoConnector key={i + j} type='double' />);
          connectors.push(
            <div
              key={`connector-row-${i}-${j}-first-double`}
              id={`connector-row-${i}-${j}-first-double`}
              className='flex h-full'
            >
              {connectorRow}
            </div>
          );
        } else if (j > 1) {
          // else create new subheader with year and title containers
          // insert connector group and title group into title container
          // insert year text into year container if its not already been displayed
          // push connector dash to connector group is display year is true
          // push role.title to title group
          titleAddOn = true;
          // push single info connection to connector group
          connectorRow.push(<InfoConnector key={i + j} />);
          connectors.push(
            <div
              key={`connector-row-${i}-${j}-addon`}
              id={`connector-row-${i}-${j}-addon`}
              className='flex h-full'
            >
              {connectorRow}
            </div>
          );
        }
      } else {
        // else if j === 1, continue
        return;
      }

      subheaders.push(
        <div
          key={`subheader-${i}-${j}`}
          id={`subheader-${i}-${j}`}
          className='flex items-start self-stretch'
        >
          <div
            id={`year-container-${i}-${j}`}
            className={
              'flex w-[4.375rem] pr-[0.625rem] justify-end items-end self-stretch' +
              (titleAddOn ? ' pt-[0.8125rem]' : ' pt-[3.625rem]')
            }
          >
            {years}
          </div>
          <div
            id={`title-container-${i}-${j}`}
            className={
              'flex items-center gap-[0.625rem] flex-[1_0_0] self-stretch border-l border-solid border-midgray' +
              (titleAddOn ? ' pt-[0.9375rem]' : ' pt-[3.75rem]')
            }
          >
            <div
              id={`connector-group-${i}-${j}`}
              className='h-full flex flex-col justify-center'
            >
              {connectors}
            </div>
            <div
              id={`title-group-${i}-${j}`}
              className='flex flex-col gap-[0.9375rem]'
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
        key={`experience-${i}`}
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
