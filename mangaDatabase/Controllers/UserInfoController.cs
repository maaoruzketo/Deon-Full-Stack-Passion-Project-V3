using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using mangaDatabase.Models;
using mangaDatabase.Service;
using mangaDatabase.Service.Context;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;

namespace mangaDatabase.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserInfoController:ControllerBase
    {
        readonly DataServiceSql _dataFromSql;
        readonly DataContext _context;

        public UserInfoController(DataServiceSql data, DataContext context)
        {
            _dataFromSql = data;
            _context = context;
        }
        [HttpGet]
        public IEnumerable<UserInfo> GetUserInfo()
        {
            return _dataFromSql.GetUser();
        }
        
        [HttpGet("random")]

        public UserInfo GetRandomUser()
        {
            return _dataFromSql.GetRandomUser();
        }
  
        [HttpPost("add")]
        public bool AddUser2(UserInfo userToAdd)
        {   
            List<UserInfo> Info = new List<UserInfo>(_dataFromSql.GetUser());
            foreach(var item in Info)
            {
                if(userToAdd.UserName == item.UserName){
                    return false;
                }
            }
            return _dataFromSql.InsertUser2(userToAdd);
            //Take tracktoAdd and pass it to our service
        }

        [HttpPost("update")]
        public bool UpdateUser(UserInfo userToUpdate)
        {
            return _dataFromSql.UpdateUser(userToUpdate);
        }

        [HttpDelete("{id}")]

        public bool DeleteTrack(int id)
        {
            return _dataFromSql.DeleteUserById(id);
        }

        [HttpGet("{UserName}")]

        public UserInfo getuserbyId(string UserName)
        {
            return _dataFromSql.GetUserByuserId(UserName);
        }
    }
}