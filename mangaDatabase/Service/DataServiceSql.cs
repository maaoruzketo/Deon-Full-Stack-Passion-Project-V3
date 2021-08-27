using System;
using System.Collections.Generic;
using System.Linq;
using mangaDatabase.Models;
using mangaDatabase.Service.Context;
using Microsoft.AspNetCore.Mvc;

namespace mangaDatabase.Service
{
    public class DataServiceSql
    {
        private readonly DataContext _context;
        public DataServiceSql(DataContext context)
        {
            _context = context;
        }

        // public string InsertUser(UserInfo userName)
        // {
        //     var userStuff = _context.Add(userName);

        //     _context.SaveChanges();

        //     return userStuff.Entity.userName;
        // }
        // public int InsertUser2(UserInfo user)
        // {
        //     var userStuff = _context.Add(user);

        //     _context.SaveChanges();

        //     return userStuff.Entity.id;
        // }
        public bool InsertUser2(UserInfo user)
        {
            var userStuff = _context.Add(user);

            _context.SaveChanges();

            return true;
        }

        public bool editUserData(int editedInfo){
            var edit = GetUsersById(editedInfo);
            _context.Update<UserInfo>(edit);
            return true;
        }
        public string AddUser(UserInfo user)
        {
            var userStuff = _context.Add(user);

            _context.SaveChanges();

            return userStuff.Entity.UserName;
        }

        public IEnumerable<UserInfo> GetUser()
        {
            return _context.userInfoSql;
        }
        public UserInfo GetUsersById(int id)
        {
            return _context.userInfoSql.SingleOrDefault(x => x.id == id);
            //Its doing it above here perfectly. Notice
        }
        public UserInfo GetRandomUser()
        {
            var rng = new Random();
            //Get the number of rows
            var count = rng.Next(3, 6);
            return GetUsersById(count);

            // return _context.userInfoSql[rng.Next(context.userInfoSql.Count)];
        }
        public bool UpdateUser(UserInfo user)
        {
            _context.Update<UserInfo>(user);
            //if you don't do a check for it being 0 , then it would update all the fields
            return _context.SaveChanges() != 0;
        }
        public bool DeleteUserById(int id)
        {
            var user = GetUsersById(id);
            _context.Remove(user);
            return _context.SaveChanges() != 0;
        }
        public int InsertManga(mangaFavorites Result)
        {
            var mangaStuff = _context.Add(Result);

            _context.SaveChanges();

            return mangaStuff.Entity.id;
        }
        public IEnumerable<mangaFavorites> GetmangaFavorites()
        {
            return _context.mangaFavoritesSql;
        }
        public mangaFavorites GetMangaById(int id)
        {
            return _context.mangaFavoritesSql.SingleOrDefault(x => x.id == id);
        }
        public UserInfo GetUserByuserId(string UserName)
        {
            return _context.userInfoSql.SingleOrDefault(x => x.UserName == UserName);
        }
        public UserInfo GetUserById(int id)
        {
            return _context.userInfoSql.SingleOrDefault(x => x.id == id);
        }
        public mangaFavorites GetRandomManga()
        {
            var rng = new Random();
            //Get the number of rows
            var count = rng.Next(3, 6);
            return GetMangaById(count);

            // return _context.userInfoSql[rng.Next(context.userInfoSql.Count)];
        }
        public bool UpdateManga(mangaFavorites manga)
        {   
            _context.Update<mangaFavorites>(manga);
            //if you don't do a check for it being 0 , then it would update all the fields
            return _context.SaveChanges() != 0;
        }
        public bool DeleteMangaById(int id)
        {
            var manga = GetMangaById(id);
            _context.Remove(manga);
            return _context.SaveChanges() != 0;
        }

        public IEnumerable<mangaFavorites> getMangabyId(string userName)
        {
            return _context.mangaFavoritesSql.Where(x => x.userName == userName);
        }
        
        public IEnumerable<mangaFavorites> getMangabyMangaName(string userName, string mangaName)
        {
            return _context.mangaFavoritesSql.Where(x => x.userName == userName && x.mangaName == mangaName);
        }
    }
}