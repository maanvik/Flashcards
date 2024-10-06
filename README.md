 Web Development Project 3 - *Traffic FlashCards 2*

Submitted by: **Maanvik Thodupunuri**

This web app: **Using these Traffic FlashCards, users can test their knowledge on Traffic Rules**

Time spent: **5** hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **The user can enter their guess in a box before seeing the flipside of the card**
- [x] **Clicking on a submit button shows visual feedback about whether the answer was correct or incorrect**
- [x] **A back button is displayed on the card and can be used to return to the previous card in a set sequence**
- [x] **A next button is displayed on the card and can be used to navigate to the next card in a set sequence**

The following **optional** features are implemented:

- [x] A shuffle button is used to randomize the order of the cards
- [ ] A user's answer may be counted as correct even when it is slightly different from the target answer
- [ ] A counter displays the user's current and longest streak of correct responses
- [ ] A user can mark a card that they have mastered and have it removed from the pool of answers as well as added to a list of mastered cards


## Video Walkthrough

Here's a walkthrough of implemented user stories:

![](./public/TrafficFlashCards_2.gif)


GIF created with ScreenToGif 


## Notes

Describe any challenges encountered while building the app.

- Initially, page was re-rendering whenever submit button is hit and later this was fixed by using event.preventDefault() which prevent page re-rendering. 
- Implementation of Randomize button was little challenging as it involves using and updating Multiple States and randomizing the cards data. 

## License

    Copyright [2024] Maanvik Thodupunuri

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.