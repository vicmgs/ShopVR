import React from 'react';
import axios from 'axios';

import {
  ShareButtons,
  ShareCounts,
  generateShareIcon
} from 'react-share';

 //the below blocks are for social network sharing
  const FacebookIcon = generateShareIcon('facebook');
  const TwitterIcon = generateShareIcon('twitter');
  const PinterestIcon = generateShareIcon('pinterest');

  const {
    FacebookShareButton,
    GooglePlusShareButton,
    LinkedinShareButton,
    TwitterShareButton,
    PinterestShareButton,
    VKShareButton,
  } = ShareButtons;

  const {
    FacebookShareCount,
    GooglePlusShareCount,
    LinkedinShareCount,
    PinterestShareCount,
  } = ShareCounts;


class SharedWishlistItem extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('wishlist url', this.props.picObj);
  }

  render() {
    return (
      <div className="wishlist-item">
        <img className="wishlist-item-pic" src={this.props.picObj.pic_name} />
        <div className="wishlist-item-info">
          <p className="wishlist-item-name">{this.props.picObj.item_name}</p>
          <p className="wishlist-item-price">${this.props.picObj.price}</p>
          <a className="wishlist-link" href={this.props.picObj.url}>View</a>
          <br />
          <div className="share-button-container">
            <FacebookShareButton
            url={this.props.picObj.url}
            title={this.props.picObj.item_name}
            className="social-icon">
              <FacebookIcon
                size={20}
                round={false} />
            </FacebookShareButton>

            <PinterestShareButton
              url={this.props.picObj.url}
              media={`${this.props.picObj.pic_name}`}
              windowWidth={1000}
              windowHeight={730}
              className="social-icon">
              <PinterestIcon size={20} round={true} />
            </PinterestShareButton>
          </div>
        </div>
      </div>
    );
 }
}

export default SharedWishlistItem;
