import React from "react";
import PropTypes from "prop-types";
import Link from "common/components/Link";

export default function Links(props) {
  function renderLinks() {
    if (props.links.length) {
      return (
        <>
          {props.links.map(link => (
            <div key={link.id} data-testid="links-list">
              <h2>
                <Link href={link.url} target="_blank">
                  {link.title}
                </Link>
              </h2>
            </div>
          ))}
        </>
      );
    }
    return null;
  }
  return renderLinks();
}

Links.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired
    })
  )
};
