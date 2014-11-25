define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc service
   * @name lyonsDayXApp.SocialFeed
   * @description
   * # SocialFeed
   * Service in the lyonsDayXApp.
   */
  angular.module('lyonsDayXApp.services.SocialFeed', [])
	.service('SocialFeed', ['$http', function ($http) {

      //var _baseUrl = 'http://localhost:3000';
      var _baseUrl = 'https://peaceful-escarpment-6314.herokuapp.com';

      var _endpoint = {
        'twitter' : _baseUrl + '/twitter-feed',
        'instagram' : _baseUrl + '/instagram-feed'
      };

      function _parseTweets(data){
        var posts = data;
        var feed = [];

        if(posts && posts.statuses && posts.statuses.length > 0){
          angular.forEach(posts.statuses, function(post){
            var socialObj = {};
            socialObj.mediaType = 'twitter';
            socialObj.id = post.id;
            socialObj.image = post.entities.hasOwnProperty('entities') ?  post.entities.media[0] : null;
            socialObj.user = {
              userName : post.user.screen_name,
              avatar : post.user.profile_image_url
            };
            socialObj.content = post.text;
            socialObj.postDate = post['created_at'];
            socialObj.colorCode = Math.round(Math.random());

            feed.push(socialObj);
          });
        }

        return feed;
      }

      function _parseInstagram(data){
        var posts = data;
        var feed = [];

        if(posts && posts.length > 0){
          angular.forEach(posts, function(post){
            if(post.user.id !== '1433035400' && post.user.id !== '26991246'){
              var socialObj = {};
              socialObj.mediaType = 'instagram';
              socialObj.id = post.id;
              socialObj.image = post.images.low_resolution.url;
              socialObj.user = {
                userName : post.user.username,
                avatar : post.user.profile_picture
              };
              socialObj.content = post.caption.text;
              socialObj.postDate = new Date(parseInt(post['created_time']) * 1000);
              socialObj.colorCode = Math.round(Math.random());

              feed.push(socialObj);
            }
          });
        }

        return feed;
      }

      function _createTagString(tags){
        var encodedTags = [];
        angular.forEach(tags, function(tag){
          encodedTags.push(encodeURIComponent(tag));
        });

        return encodedTags.join('+');
      }


      this.getTweets = function(hastags){
        var tags = _createTagString(hastags);

        return $http({
          url: _endpoint.twitter + '/' + tags,
          method: 'GET',
          responseType: 'json',
          transformResponse: _parseTweets

        });
      };

      this.getInstagram = function(hashTag){
        var tag = hashTag.toString();
        return $http({
          url: _endpoint.instagram + '/' + tag,
          method: 'GET',
          responseType: 'json',
          transformResponse: _parseInstagram
        });
      };

	}]);
});
