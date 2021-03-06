### General

- My reasoning behind learning React _again_ is to **maintain working knowledge in a popular frontend JavaScript framework**. In my opinion, maintaining an ancillary competence in a frontend framework is important because no matter what field you specialize in, there could always be the necessity to build a interface for you/other users to interact with a backend system to do a myriad of different things.
- Currently, I am working as a Cloud Engineer, learning technologies like Docker, containerization, Pub/Sub, etc., under the Google Cloud Platform umbrella, and this is my main area of focus. However, _one day_ I may decide to build my own app to manage multiple backend services/infrastructure components/apps in the Cloud, and for that I'm going to need to leverage a framework like React to build an interface I can use or provide to others. Moreover, there could be an ask from work to build an interface, in which case, I have a feeling that React will be preferred over Vue or Angular.
  - I was actually learning Vue for a couple of months, and I really enjoyed it. But as I approach 32, I'm realizing it's **not always about what you like and dislike, it's imperative you make correct long-term, pragmatic and financially-sensible decisions**. React is much more popular that both Vue and Angular, developing using this framework will be relatively easier becausee of the enormous community surrounding it. Furthermore, if things were to progress on some front, and I begin collaborating with another engineer/team, having the user interface built with something ubiquitous like React would make things easier.

### App ideas:

- List container images in Artifact/Container Registry and allow users to manage and monitor Cloud Run instances
- Basic guide to select GCP services and potential use cases for them
- Use GCP Billing APIs to monitor costs of services, and/or use GCP Monitoring to track visitors accessing a public app running on a container

### Packages to use:

- [Mirage JS • An API mocking library for frontend developers](https://miragejs.com)

### Styling:

- Why use [CSS modules](https://dev.to/myogeshchavan97/an-introduction-to-css-modules-in-react-2fkd)?
  - In the React application, we usually create a single .css file and import it to the main file so the CSS will be applied to all the components. But using CSS modules helps to create separate CSS files for each component and is local to that particular file and avoids class name collision.
- Good/potentially very useful (but a little convulted) example of conditional CSS styling with useState and useEffect hooks in HeaderCartButtonNew.js

### Folder structure/naming conventions

- In addition to "UI" and "Layout" folders within "components", there are "feature" folders that resemble the different logical components of your app, for the food order app there are folders for "Cart" and "Meals"
