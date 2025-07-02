
function Footer() {
  return (
    <footer className="bg-gray-800 text-white text-center py-4 mt-10">
      <p>&copy; {new Date().getFullYear()} Task Manager. All rights reserved.</p>
      <div className="mt-2 space-x-4">
        <a href="https://github.com/YOUR_USERNAME" className="underline text-sm">GitHub</a>
        <a href="#" className="underline text-sm">Contact</a>
      </div>
    </footer>
  );
}

export default Footer;
