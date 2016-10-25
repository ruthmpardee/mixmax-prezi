## Prezi Link Resolver

This will allow a link to a Prezi presentation pasted into a Mixmax email to display that presentation in the email directly, with buttons to navigate at the bottom.

### To Run

`npm start`

A sample Prezi link you can use to test (public Prezi made by Ruth M. Pardee): https://prezi.com/edauonb-h_zi

### Step-by-step to add to Mixmax

1. Clone this git repo locally

2. Run with `npm start`.

3. Test it's working by going to "http://localhost:8000/resolver/?url=%22https://prezi.com/edauonb-h_zi%22" in your browser. You should see the object sent back as the response, where the body parameter is the iframe HTML element Mixmax will display embedded in the email.

4. Go to your Integrations section in Mixmax settings (https://app.mixmax.com/dashboard/settings/integrations), and add a Link Resolver with these settings:

| Input Name         | Value                          |
| -------------------|:------------------------------:|
| Description        | Prezi (prezi.com/*)            |
| Regular Expression | prezi.com/                     |
| Resolver URL       | http://localhost:8000/resolver |

5. Restart your Chrome in insecure setting by quitting it, and then running `open -a Google\ Chrome --args --allow-running-insecure-content --ignore-certificate-errors` in your command line.

6. Open gmail with Mixmax running, make a new compose window, and paste a Prezi link (here's my example one you can use: https://prezi.com/edauonb-h_zi). You should see in line the Prezi player opens and you can navigate through the presentation with the arrows at the bottom.

See more detail in the [Mixmax SDK developer docs](http://developer.mixmax.com/docs/overview-link-resolvers).

### Prezi API

More info on the Prezi API (currently in alpha) can be found in the [Prezi API developer docs](http://prezi.github.io/prezi-player/).