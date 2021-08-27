using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System;
namespace mangaDatabase.Models
{
    public class mangaFavorites
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]


        public int id {get; set;}
        public string userName { get; set; }
        public string mangaName { get; set; }
        public string mangaId { get; set; }
        public string bookCover { get; set; }

        public mangaFavorites(){}
    }
}