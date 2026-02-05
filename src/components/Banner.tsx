import Container from "./Container";

export default function Banner() {
  return (
    <div className="border-b border-amber-200 bg-amber-50">
      <Container className="py-2">
        <p className="text-xs sm:text-sm text-amber-900">
          <span className="font-semibold">Notice:</span> Website is currently under maintenance. You can still submit the form below or email us directly:
          <span className="font-medium"> ap@ic-h.co.uk</span>
        </p>
      </Container>
    </div>
  );
}
