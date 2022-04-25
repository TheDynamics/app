import { CustomResponse } from "./../utils/customResponse";
import EventService from "./../services/event.service";

class EventContoller {
  async create(req) {
    const result = await EventService.create(req.body);
    return new CustomResponse(201, "event created", result);
  }

  async getAll(req) {
    const result = await EventService.getAll();
    return new CustomResponse(200, "All event", result);
  }

  async getOne(req) {
    const result = await EventService.getOne(req.params.eventId);
    return new CustomResponse(200, "event data", result);
  }

  async update(req) {
    const result = await EventService.update(req.params.eventId, req.body);
    return new CustomResponse(200, "event updated", result);
  }

  async delete(req) {
    const result = await EventService.delete(req.params.eventId);
    return new CustomResponse(200, "event deleted", result);
  }
}

const EventCtrl = new EventContoller();

export { EventCtrl };
