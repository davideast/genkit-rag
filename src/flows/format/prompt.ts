import { defineDotprompt } from '@genkit-ai/dotprompt'
import { PageDataSchema } from '../scrape/schema'

export default defineDotprompt({
  name: 'format',
  model: 'googleai/gemini-1.5-flash-8b-latest',
  input: { schema: PageDataSchema },
  output: { format: 'text' }, 
},
  `Take this HTML below and turn it into the format of the markdown doc given the example below. Do not add anything else to the format.
  {{ name }}
  {{ description }}
  {{ details}}
  
  <example>
  # 2024 Racin' to Beat Cancer 5k, 10k, & Half
  
  Points count towards our Year-Long 5k, 10k, Endurance, & Back of the Pack Series.  Points will also count towards our Fall Series.  Find more info [about the series here.](http://bishopsevents.com/series-faqs/)
  [Register Now](https://register.chronotrack.com/r/77056)
  
  Come out and enjoy these scenic 5k/10k/Half courses through the trails of Burke Lake Park..
  Walkers and strollers are welcome to attend this event.
  [**Virtual Race Option**](https://bishopsevents.com/virtual-run-info/)
  We now offer a virtual run option for those who cannot make it on race day. Find more information about our virtual option on our [Virtual Races page](https://bishopsevents.com/virtual-run-info/).
  
  ### Runners Receive
  *Finisher's Medal, Technical (Drifit) Event Shirt, & A Chip Timed Event*
  **Charity Information**
  
  Race benefits We Rock Cancer. To learn more about and support We Rock Cancer, [visit here.](http://www.werockcancer.org/)
  [![](https://bishopsevents.com/wp-content/uploads/2021/02/We-Rock-Cancer-300x300.png)](http://www.werockcancer.org/)
  
  ## Race Start Times
  
  Half - 7:30am (Half marathon has a time limit of 3:15 for completion)
  *If you think your pace for the half marathon is near or above three hours, please reach out to BishopsEvents@yahoo.com to arrange an earlier start time as we want to accommodate all runners' abilities.*
  10k - 7:45am
  5k - 8am
  
  ## Registration Fees
  5k - $30, until Sept 30 ($35)
  10k - $45, until Sept 30 ($50)
  Half - $65, until Sept 30 ($70)
  ***Price will increase on race morning by $5 for each distance***
  T-shirts guaranteed to runners registered before Oct 2. We will order extra t-shirts for those who register after that date, but it is on a first-come first-served basis.
  
  ## T-Shirt Design
  [![](https://bishopsevents.com/wp-content/uploads/2024/09/Racin-to-Beat-Cancer-5k-FRONT-221x300.jpg)](https://bishopsevents.com/wp-content/uploads/2024/09/Racin-to-Beat-Cancer-5k-FRONT.jpg)
  
  ## Race Medal Design
  Race medal designs can be viewed on the Friday before the race on the [Bishops Events Facebook](https://www.facebook.com/BishopsEvents) page or our [Instagram page](https://www.instagram.com/bishopseventsllc/).
  
  ## Course Maps can be found at
  [https://bishopsevents.com/burke-lake-park-2/](https://bishopsevents.com/burke-lake-park-2/) - Shelter A
  
  This route is a trail route that is fairly flat and well maintained although there are roots to be navigated around. The 5k and 10k are a single out-and-back. The Half is out-and-back twice.
  Back of the Pack Time: 11:30 (5/10k), 12:30 (Half)
  
  ## Live Race Results
  Live results will be posted on [Athlinks.com](https://www.athlinks.com/event/360372/results/Event/1064713/Results). Additionally, there will be a QR code at the race for you to scan to immediately view your results. Final race results with series points will be posted to our website on the Monday following your race.
  Runner tracking is now available when you sign up for a race with Bishop's Events. Click on the green SMS button (see example below) at the end of your registration and have your race updates sent to your mobile device as well as those of your friends & family so they can track your race progress.
  [![](https://bishopsevents.com/wp-content/uploads/2024/04/Athlete-300x87.png)](https://bishopsevents.com/wp-content/uploads/2024/04/Athlete.png)
  
  ## Awards
  We award the top 3 men and women overall during our awards ceremony post-race. We also award the 1st & 2nd place Male and Female in these categories: 19&Under, 20-29, 30-39, 40-49, 50-59, 60-69, & 70+. Runners who place top 3 overall in their race are not eligible to also win their age groups.
  
  ## Photos
  We will post any photos taken by staff on our [Facebook page](https://www.facebook.com/BishopsEvents) by Tuesday after the event.
  
  ## Social Media Challenge
  On Tuesdays, we pick our favorite Instagram or Facebook post from the previous race weekend. The winner will receive 50% off a future race! Make sure to tag us in your race photos at:
  Instagram: [BishopsEventsLLC](https://www.instagram.com/bishopseventsllc/)
  Facebook: [BishopsEvents](https://www.facebook.com/BishopsEvents)
  
  ## Packet Pickup
  Beat the check-in lines race morning and pick up your bib and more at Road Runner Sports! All those picking up will be offered a special RRS discount on their purchases during pick-up. Pickup is from 6:00 - 8:00 pm on Friday, October 11 at Road Runner Sports (1120 W. Broad St., Falls Church, VA 22046).
  Additionally, packet pickup is available at the event. We recommend arriving one hour before your event start time to check-in.
  
  ## Race Day Registration
  There will be race day registration. Participants will need to arrive approximately one hour before the race to register for the event. T-shirt sizes cannot be guaranteed for race day registers.
  ***Price will increase on race morning by $5 for each distance***
  
  ## Water Stations
  
  There will be 9 water stations along the 1/2 marathon course at approximately mile markers 1.1, 3.1, 3.5, 5.1, 6.55, 7.65, 9.65, 10, & 12. Three water stations will be along the 10k course at approximately mile markers 1.1, 3.1, & 5.1. Two water stations will be along the 5k course at approximately mile markers 1.1 & 2. Gatorade will be available at some water stations. Water stations are subject to change as deemed necessary.
  
  ## Restrooms
  Restrooms can be located at the far end of the parking lot from Shelter A.
  
  ## Volunteers
  Volunteers should arrive approximately 60 minutes before the first race kicks off. We will assign volunteer tasks on race morning (water station, course marshals, finish line support, etc). You can find parking information under “Directions to Parking” with a latitude and longitude pin for where to meet.
  
  ## Weather Policy
  We are an all-weather race company (rain or shine or sleet or snow). We will email registered runners and post on social media if the race is cancelled, but this is quite rare, otherwise assume the race is taking place as scheduled.
  Weekly weather reports are posted on the Thursday before race weekends on our [Facebook page](https://www.facebook.com/BishopsEvents) by Chad Merrill with the Hagerstown Almanack. Race officials may delay, change or postpone the event due to weather conditions. All registered runners will be notified via email of any changes. In most cases, a decision is not made until the night before the race, and a decision could come as late as the morning of the event.
  
  ## Refunds & Transfers
  To view our full refund/transfer policy, [click here.](https://bishopsevents.com/refundtransfer/)
  
  ## Directions to Parking
  The race starts and ends in Burke Lake Park (7315 Ox Rd, Fairfax Station, VA 22039).  Parking is at Shelter A. The Shelter is the first road on the right after passing the gatehouse and the Visitor's Center once entering the park. The Shelter parking lot will be on the left. The best way to locate this event is via GPS using this latitudinal and longitudinal pin: 38.758244, -77.303988
  
  ## Details
  Date: October 12
  Time: 7:30 am - 12:00 pm
  Event Categories: [5k](https://bishopsevents.com/events/category/5k/), [10k](https://bishopsevents.com/events/category/10k/), [Half-Marathon](https://bishopsevents.com/events/category/half-marathon-2/)
  Event Tags: [burke lake](https://bishopsevents.com/tag/burke-lake/), [racin to beat cancer](https://bishopsevents.com/tag/racin-to-beat-cancer/), [10k](https://bishopsevents.com/tag/10k/), [5k](https://bishopsevents.com/tag/5k/), [half](https://bishopsevents.com/tag/half/)
  Venue: [Burke Lake Park](https://bishopsevents.com/venue/burke-lake-park/)
  7315 Ox Rd
  Fairfax Station, VA 22039
  United States
  Organizer: [Bishops Events](https://bishopsevents.com/organizer/bishops-events/)
  Email: BishopsEvents@yahoo.com
  </example>  
  `
)