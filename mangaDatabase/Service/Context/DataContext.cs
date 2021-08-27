using System.Collections.Generic;
using mangaDatabase.Models;
using Microsoft.EntityFrameworkCore;
using System;
namespace mangaDatabase.Service.Context
{
    public class DataContext:DbContext
    {
        //Take me to UserInfo.cs, were looking for the password column  string

        public DbSet<UserInfo> userInfoSql{ get; set; }
        public DbSet<mangaFavorites> mangaFavoritesSql{ get; set; }
        public DataContext(DbContextOptions<DataContext> options): base(options)
        { }
        
        protected override void OnModelCreating(ModelBuilder builder)
        {
            //oninit
            base.OnModelCreating(builder);
            SeedData(builder);
        }
        private void SeedData(ModelBuilder builder){
            //Grab info from our Dataserver that has hardcoded data in it
            var fixedData = new List<UserInfo>() {
                new UserInfo
                  {
                    id = 1,
                    UserName  = "maaoruzketo",
                    Password = "kakuzu13"
                  }
            };
            var fixedData2 = new List<mangaFavorites>(){
                  new mangaFavorites
                  {
                    id = 1,
                    userName = "maaoruzketo",
                    mangaName = "One Piece",
                    mangaId = "4e70ea10c092255ef7004aa2",
                    bookCover = "https://cdn.mangaeden.com/mangasimg/b0/b0ac7f12d2cb0fc07b9418d5544a3f97cbbc30e967396ae70f98d101.png",
                  }
            };
            
            //This line helps give the db some seed data. When you want to start with
            builder.Entity<UserInfo>().HasData(fixedData);
            builder.Entity<mangaFavorites>().HasData(fixedData2);
        }
    }
}
