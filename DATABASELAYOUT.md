# Backend Layout

### Authentication
* User Registration
* User Login
* JWT Contains userID + Username

### User Profile
* UserID (Not null - PrimaryID)
* First Name
* Last Name
* Avatar *(Optional)* - Fallback to Gravatar
* Email *(Required)*
* Location (Object) *(Optional)*
	* Country
	* CountryCode
* Website *(Optional)*
* Company  *(Optional)*
* Title *(Optional)*
* Supporter *(Boolean)* - Depends on [Donate](#donate)
* Background *(For Donators Only)* 
* Bio *(Optional)*
* Skills (Array of Object) Pushed from its own Table
  * SkillsID
  * UserID -> SkillsID
  * InnerJoin -> Skills -> Skills Name
  
  ```sql
  SELECT column_name(s)
  FROM table1
  INNER JOIN table2 ON table1.column_name = table2.column_name;
  
  ```
  * UserSkills Table
  	* UserD
	* SkillsID

### Skills
* All Devicons
* NGFor to display them
* Limited to 5
* Typeahead
* Pushed to user table from Skills table or linked

### Donate
* User can donate with Stripe
* Token is sent from Stripe to Angular
* Angular -> Django ?
* Django -> Stripe -> Handle Token -> Django -> Register User -> Angular -> Display Message
* Angular -> Stripe -> Angular -> Charge Token -> Stripe -> Angular -> Django -> Display Message to user on user update

# Database

### User Table:
* UserID - `(Primary Key)  not null - AutoField`
* First Name - `CharField`
* Last Name - `CharField`
* Avatar - this will point to a image file - `ImageField`
* Email *(Required)*  - `CharField`
* Location  - CharField - `CharField`
* Website *(Optional)*    - `CharField`
* Company  *(Optional)*  - `CharField`
* Title *(Optional)*   - `CharField`
* BackgroundImage *(For Donators Only)*    - `CharField`
* Bio *(Optional)* - `TextField`
* TwitterURL - `CharField`
* FacebookURL - `CharField`
* LinkedInURL - `CharField`
* YouTubeURL - `CharField`
* InstagramURL - `CharField`
* GitHubURL - `CharField`

### Education Table:
* ID - `(Primary Key)  not null - AutoField`
* UserID - `not null  - Foreign Key `
* School - `CharField`
* Qualification - `CharField`
* FieldOdfStudy - `CharField`
* DateFrom - `DateField`
* DateTo - `DateField` *present IS NULL*
* Description   - `TextField`

### Job - Table:
* ID - `(Primary Key)`
* UserID - `not null  - Foreign Key`
* JobTitle - `CharField`
* Company - `CharField`
* Location - `CharField`
* DateFrom - `DateField`
* DateTo - `DateField` *present IS NULL*
* Description - `TextField`

#### Donation Table:
* UserID - `not null  - Foreign Key `
* Date - `DateField`
* Amount - `IntegerField`

### Skills - Table:
* ID - `(Primary Key)(Unique) - IntegerField`
* NameOfSkill - `CharField` 