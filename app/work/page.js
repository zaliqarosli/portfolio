import Card from './../ui/components/card';

export default function Page() {
  return (
    <main className='flex py-[3.75rem] px-[1.875rem] justify-evenly items-center content-center gap-[1.875rem] self-stretch flex-wrap'>
      <Card projectTitle='mtl bloc list' srcImage='/mtl-bloc-list@2x.jpg' />
      <Card
        projectTitle='ui design for loris'
        srcImage='/ui-design-loris@2x.jpg'
      />
      <Card
        projectTitle='patient dashboard'
        srcImage='/patient-profile-page@2x.jpg'
      />
    </main>
  );
}
