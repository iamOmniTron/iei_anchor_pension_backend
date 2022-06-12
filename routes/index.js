const {Router} = require("express");

const {login} = require("../controllers/admin");
const { getHero, editHero } = require("../controllers/hero");
const {createService,editService,deleteService, getServices} = require("../controllers/service");
const {getCTA,editCTA} = require("../controllers/cta");
const {authenticateRequest:auth} = require("../middlewares/auth");
const {getInfo,editInfo} = require("../controllers/info");
const {createReview,getReviews} = require("../controllers/review");
const {sendMail,getMails} = require("../controllers/mail");
const {getShowcase,editShowcase} = require("../controllers/showcase");

const router = Router();

// TODO: Authenticate post routes

// ADMIN
router.post("/admin/login",login);

// ----LANDING PAGE----
// HERO
router.get("/hero/:id",getHero);
router.post("/hero/edit/:id",editHero);

// SERVICE
router.post("/services",createService);
router.get("/services",getServices);
router.post("/service/:id",editService);
router.post("/service/delete/:id",deleteService);

// CALL TO ACTION
router.get("/cta/:id",getCTA);
router.post("/cta/:id",editCTA);

// INFO
router.get("/info/:id",getInfo);
router.post("/info/edit/:id",editInfo);

// REVIEW
router.post("/review",createReview);
router.get("/reviews",getReviews);

// MAIL
router.post("/mail",sendMail);
router.get("/mails",getMails);


// SHOW CASE
router.get("/showcase/:id",getShowcase);
router.post("/showcase/:id",editShowcase);

module.exports = router;
