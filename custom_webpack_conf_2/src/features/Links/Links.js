import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Link from "../../common/components/Link";

export function Links(props) {
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

const select = state => {
  return {
    links: state.links.links
  };
};

export default connect(select)(Links);

Links.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired
    })
  )
};
