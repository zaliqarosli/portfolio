import CaseStudyFooter from './../../ui/components/case-study-footer';

export default function Layout({ children }) {
  return (
    <>
      {children}
      <CaseStudyFooter />
    </>
  );
}
