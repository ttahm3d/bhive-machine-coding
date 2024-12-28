export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#222E34] text-[#dddddd]  p-3 mt-auto text-sm">
      <div className="container flex justify-center">
        <p>&copy; Copyright {year}. Bhive Private Limited</p>
      </div>
    </footer>
  );
}
