using Microsoft.EntityFrameworkCore.Migrations;

namespace fullstackapi2.Migrations
{
    public partial class init : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "mangaFavoritesSql",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    userName = table.Column<string>(nullable: true),
                    mangaName = table.Column<string>(nullable: true),
                    mangaId = table.Column<string>(nullable: true),
                    bookCover = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_mangaFavoritesSql", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "UserInfoSql",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    UserName = table.Column<string>(nullable: true),
                    Password = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UserInfoSql", x => x.id);
                });

            migrationBuilder.InsertData(
                table: "UserInfoSql",
                columns: new[] { "id", "Password", "UserName" },
                values: new object[] { 1, "password", "maaoruzketo" });

            migrationBuilder.InsertData(
                table: "mangaFavoritesSql",
                columns: new[] { "id", "bookCover", "mangaId", "mangaName", "userName" },
                values: new object[] { 1, "https://cdn.mangaeden.com/mangasimg/b0/b0ac7f12d2cb0fc07b9418d5544a3f97cbbc30e967396ae70f98d101.png", "4e70ea10c092255ef7004aa2", "One Piece", "maaoruzketo" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "mangaFavoritesSql");

            migrationBuilder.DropTable(
                name: "UserInfoSql");
        }
    }
}
