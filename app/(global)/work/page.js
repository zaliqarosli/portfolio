import Card from '../../ui/components/card';

export default function Page() {
  return (
    <main className='flex py-[3.75rem] px-[1.875rem] justify-evenly items-center content-center gap-[1.875rem] self-stretch flex-wrap'>
      <Card
        name='mtl-bloc-list'
        title='mtl bloc list'
        srcImage='/mtl-bloc-list@2x.jpg'
      />
      <Card
        name='ui-design-loris'
        title='ui design for loris'
        srcImage='/ui-design-loris@2x.jpg'
      />
      <Card
        name='patient-dashboard'
        title='patient dashboard'
        srcImage='/patient-profile-page@2x.jpg'
      />
    </main>
  );
}
