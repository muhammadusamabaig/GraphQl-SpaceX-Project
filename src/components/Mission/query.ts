import gql from 'graphql-tag';

export const Missoninfo=gql `

  query launchinfo {
    launches {
      mission_name
      mission_id
      launch_success
      launch_year
      launch_date_unix
      launch_date_utc
    }
  }
  
  
  

`