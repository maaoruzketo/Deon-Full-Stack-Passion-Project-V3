using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.IdentityModel.Tokens;
using mangaDatabase.Models;
using mangaDatabase.Service.Context;
using mangaDatabase.Service;
using System.Linq;

namespace mangaDatabase.Controllers
{
    [Route("auth")]
    [ApiController]
    public class AuthController: ControllerBase
    {
        private readonly DataContext _context;
        
        public AuthController(DataContext context)
        {
            _context = context;
        }

        [HttpPost, Route("login")]
        public IActionResult Login([FromBody]UserInfo user)
        {
            var verifiedUser = _context.userInfoSql.SingleOrDefault(u => u.UserName == user.UserName && u.Password == user.Password);
            if (verifiedUser != null)
            { 
                var secretKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("superSecretKey@345"));
                var signinCredentials = new SigningCredentials(secretKey, SecurityAlgorithms.HmacSha256);
                var tokeOptions = new JwtSecurityToken(
                    issuer: "http://localhost:5000",
                    audience: "http://localhost:5000",
                    claims: new List<Claim>(),
                    expires: DateTime.Now.AddDays(5),
                    signingCredentials: signinCredentials
                );
                var tokenString = new JwtSecurityTokenHandler().WriteToken(tokeOptions);
                return Ok(new { Token = tokenString });
            }
            return Unauthorized();
        }
    }
}