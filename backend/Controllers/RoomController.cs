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
}