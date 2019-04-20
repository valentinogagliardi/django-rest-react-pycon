import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

export function Links(props) {
  function renderLinks() {
    if (props.links.length) {
      return (
        <>
          {props.links.map(link => (
            <div data-testid="links-list">
              <h2>
                <a key={link.id} href={link.url} target="_blank">
                  {link.title}
                </a>
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
