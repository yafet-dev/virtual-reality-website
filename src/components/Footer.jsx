import { resourcesLinks, platformLinks, communityLinks } from "../constants";

function Footer() {
  return (
    <footer className="mt-20 border-t py-10 border-neutral-700 ">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        <div>
          <h3 className="text-md font-semibold mb-4">Resources</h3>
          <ul className="space-y-2">
            {resourcesLinks.map((link, index) => {
              return (
                <li key={index}>
                  <a
                    className="text-neutral-300  hover:text-white text-sm"
                    href={link.href}
                  >
                    {link.text}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <div>
          <h3 className="text-md font-semibold mb-4">Platform</h3>
          <ul className="space-y-2">
            {resourcesLinks.map((link, index) => {
              return (
                <li key={index}>
                  <a
                    className="text-neutral-300  hover:text-white text-sm"
                    href={link.href}
                  >
                    {link.text}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <div>
          <h3 className="text-md font-semibold mb-4">Resources</h3>
          <ul className="space-y-2">
            {resourcesLinks.map((link, index) => {
              return (
                <li key={index}>
                  <a
                    className="text-neutral-300  hover:text-white text-sm"
                    href={link.href}
                  >
                    {link.text}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
