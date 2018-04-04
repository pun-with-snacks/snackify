CREATE TABLE "User" (
	"gitHandle" TEXT NOT NULL UNIQUE,
	"gitAvatar" bytea NOT NULL,
	"votesRemaining" integer NOT NULL UNIQUE,
	"isAdmin" BOOLEAN NOT NULL,
	CONSTRAINT User_pk PRIMARY KEY ("gitHandle")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "FoodItem" (
	"_id" serial NOT NULL,
	"foodName" TEXT NOT NULL,
	"imgUrl" TEXT NOT NULL,
	"price" FLOAT NOT NULL,
	"itemVotes" integer NOT NULL,
	"inCart" BOOLEAN NOT NULL,
	CONSTRAINT FoodItem_pk PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "UserToItem" (
	"_id" serial NOT NULL,
	"firstVoterGitHandle" TEXT NOT NULL,
	"foodItemId" integer NOT NULL,
	CONSTRAINT UserToItem_pk PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "WeeklyRules" (
	"_id" integer NOT NULL,
	"budget" FLOAT NOT NULL,
	"votesPerUser" integer NOT NULL,
	"startTime" integer NOT NULL,
	"endTime" integer NOT NULL,
	CONSTRAINT WeeklyRules_pk PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);


ALTER TABLE "UserToItem" ADD CONSTRAINT "UserToItem_fk0" FOREIGN KEY ("firstVoterGitHandle") REFERENCES "User"("gitHandle");
ALTER TABLE "UserToItem" ADD CONSTRAINT "UserToItem_fk1" FOREIGN KEY ("foodItemId") REFERENCES "FoodItem"("_id");
