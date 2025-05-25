import { tweetsData } from './data.js'

const tweetInput = document.getElementById('tweet-input')
const tweetBtn = document.getElementById('tweet-btn')

tweetBtn.addEventListener('click', function(e){
    e.preventDefault()

    console.log(tweetInput.value)
})

document.addEventListener('click', function(e){
    let dataSet = e.target.dataset
    if (dataSet.like){
        handleLikeClick(dataSet.like)
    } else if (dataSet.retweet) {
        handleRetweetClick(dataSet.retweet)
    }
})

function handleLikeClick(tweetId){
     const targetTweetObj = getTweet(tweetId)
    
     if (targetTweetObj.isLiked) {
        targetTweetObj.likes--
    } else {
        targetTweetObj.likes++
    }

    targetTweetObj.isLiked = !targetTweetObj.isLiked
    
    render()
}

function handleRetweetClick(tweetId){
   const targetTweetObj = getTweet(tweetId)

   if (targetTweetObj.isRetweeted) {
     targetTweetObj.retweets--
   } else {
     targetTweetObj.retweets++
   }

   targetTweetObj.isRetweeted = !targetTweetObj.isRetweeted

   render()
}

function getTweet(tweetId) {
    return tweetsData.filter(function(tweet){
        return tweet.uuid === tweetId
    })[0]
}

function getFeedHtml(){  
    let feedHtml = ``

    tweetsData.forEach(function(tweet){
        let likeIconClass = ''
        let retweetIconClass = ''
        
        if (tweet.isLiked){
            likeIconClass = 'liked'
        }
        
        if (tweet.isRetweeted) {
            retweetIconClass = 'retweeted'
        }
        
        feedHtml += `
<div class="tweet">
    <div class="tweet-inner">
        <img src="${tweet.profilePic}" class="profile-pic">
        <div>
            <p class="handle">${tweet.handle}</p>
            <p class="tweet-text">${tweet.tweetText}</p>
            <div class="tweet-details">
                <span class="tweet-detail">
                    <i class="fa-regular fa-comment-dots" 
                    data-reply="${tweet.uuid}"></i>
                    ${tweet.replies.length}
                </span>
                <span class="tweet-detail">
                    <i class="fa-solid fa-heart ${likeIconClass}" 
                    data-like="${tweet.uuid}"></i>
                    ${tweet.likes}
                </span>
                <span class="tweet-detail">
                    <i class="fa-solid fa-retweet ${retweetIconClass}" 
                    data-retweet="${tweet.uuid}"></i>
                    ${tweet.retweets}
                </span>
            </div>   
        </div>            
    </div>
</div>
`
   })
   return feedHtml 
}

function render(){
    document.getElementById('feed').innerHTML = getFeedHtml()
}

render()