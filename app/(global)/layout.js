import GlobalFooter from './../ui/components/global-footer';

export default function Layout({ children }) {
  return (
    <>
      {children}
      <GlobalFooter />
    </>
  );
}
