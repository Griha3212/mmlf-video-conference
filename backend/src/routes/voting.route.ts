import express from 'express';
import * as votingController from '../controllers/vote.controller';

const router = express.Router();

const {
  voteForSpeaker,
} = votingController;

router.post('/vote_for_speaker', voteForSpeaker);

export default router;
