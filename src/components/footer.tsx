export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#222E34] text-[#dddddd] flex justify-center p-3 mt-auto text-sm">
      <p>&copy; Copyright {year}. Bhive Private Limited</p>
    </footer>
  );
}
