using System.Collections.Generic;
using mangaDatabase.Models;
using mangaDatabase.Service;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace mangaDatabase.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class mangaFavoritesController
    {
        readonly DataServiceSql _dataFromSql;

        public mangaFavoritesController(DataServiceSql data)
        {
            _dataFromSql = data;
        }
        [HttpGet, Authorize]
        public IEnumerable<mangaFavorites> GetmangaFavorites()
        {
            return _dataFromSql.GetmangaFavorites();
        }
        
        [HttpGet("random")]

        public mangaFavorites GetRandomManga()
        {
            return _dataFromSql.GetRandomManga();
        }
        [HttpPost("add")]
        public int AddManaga(mangaFavorites mangaToAdd)
        {
            //Take tracktoAdd and pass it to our service
            return _dataFromSql.InsertManga(mangaToAdd);
        }

        [HttpPost("update")]
        public bool UpdateManga(mangaFavorites mangaToUpdate)
        {
            return _dataFromSql.UpdateManga(mangaToUpdate);
        }

        [HttpDelete("{id}")]

        public bool DeleteManga(int id)
        {
            return _dataFromSql.DeleteMangaById(id);
        }
        
        [HttpGet("{userName}")]

        public IEnumerable<mangaFavorites> getMangabyId(string userName)
        {
            return _dataFromSql.getMangabyId(userName);
        }
        
        [HttpGet("{userName}/{mangaName}")]

        public IEnumerable<mangaFavorites> getMangaName(string userName, string mangaName)
        {
            return _dataFromSql.getMangabyMangaName(userName,mangaName);
        }
        
    }
}