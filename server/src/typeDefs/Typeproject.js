import { gql } from 'apollo-server-express'

export default gql`


type Typeproject {
        id:ID!
        title:String, 
        description: String,
        methodology:String,
        Projects:[Project]
        
     
    
    }
    extend type Query{
     gettype_project(id:String):Typeproject
     gettypes_project:[Typeproject]
    
    }

  extend type Mutation {
        add_type_project(title:String, description: String,methodology:String ):Typeproject 
        update_type_project(id:String,title:String, description: String,methodology:String ):Typeproject
        delete_type_project(id: String ):Typeproject
        add_project(id:String,title:String,category: String,school_year:String,start_date:String,end_date:String,class_involved:String,methodology:String,number_of_teams:String,number_of_members:String,number_of_tutors_per_team:String):Typeproject
        
       
    }
`;
