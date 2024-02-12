using backend.Models;
using Microsoft.AspNetCore.Mvc;
using backend.Parsers;

namespace backend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class RoomController : ControllerBase
    {
        [HttpGet]
        public ActionResult<IEnumerable<Room>> Get()
        {
            ParserXml parser = new ParserXml();
            List<Room> rooms = parser.ParserRooms();
            
            return Ok(rooms);
        }
    }
    
    [ApiController]
    [Route("[controller]")]
    public class PlayerController : ControllerBase
    {
        [HttpGet]
        public ActionResult<IEnumerable<Player>> Get()
        {
            ParserPlayer parser = new ParserPlayer();
            Player player = parser.MainPlayer();

            return Ok(player);
        }
    }
}