const express = require('express');
const commonController = require('../controllers/commonController');
const router = express.Router();

/**
 * @swagger
 * /api/v1/common/sendemail:
 *   post:
 *     summary: Send a new email.
 *     tags: [common api's]
 *     security: [{
 *         bearerAuth: []
 *     }] 
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             properties:
 *               emailTo:
 *                 type: string
 *               emailFrom:
 *                 type: string 
 *               subject:
 *                 type: string
 *               emailBody:
 *                 type: string 
 *               realSender:
 *                 type: string  
 *             required:
 *               - emailTo
 *               - emailFrom
 *               - subject
 *               - emailBody
 *               - realSender
 *     responses:
 *       201:
 *         description: email sent Successfully
 *       400:
 *         description: Invalid request body
 *       500:
 *         description: Server error
 */
router.post('/sendEmail',  commonController.sendEmail);

router.get('/test',  commonController.test);


module.exports = router;